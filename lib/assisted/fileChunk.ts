import SparkMD5 from 'spark-md5';

// 定义分片信息对象
interface ChunkInfo {
    /**
     * 分片起始位置
     *
     * @description 分片起始位置
     */
    start: number;
    /**
     * 分片结束位置
     *
     * @description 分片结束位置
     */
    end: number;
    /**
     * 分片索引
     *
     * @description 分片索引，防止分片顺序错乱
     */
    index: number;
    /**
     * 分片哈希值
     *
     * @description 分片哈希值，用于校验分片是否完整
     */
    hash: string;
    /**
     * 分片数据
     *
     * @description 分片数据
     */
    blob: Blob;
}

/**
 * 大文件分片
 *
 * @description 将文件按照指定大小进行分片，并计算每个分片的哈希值
 *
 * @author karl
 *
 * @param file  文件对象
 * @param CHUNK_SIZE    分片大小，单位：字节，默认：5MB
 *
 * @returns 分片信息数组
 */
export const cutAndHashFile = async (file: File, CHUNK_SIZE?: number): Promise<ChunkInfo[]> => {
    CHUNK_SIZE = CHUNK_SIZE || 1024 * 1024 * 5; // 默认分片大小为5MB

    // 分片信息数组
    const chunks: ChunkInfo[] = [];
    // 创建一个SparkMD5实例
    const spark = new SparkMD5.ArrayBuffer();
    // 文件读取偏移量
    let offset = 0;
    // 分片索引
    let index = 0;
    // 存储每个切片和哈希操作的 Promise 对象
    const promises: Promise<void>[] = [];

    /**
     * 切片和哈希函数
     *
     * @param deadline  空闲时间
     */
    const sliceAndHash = (deadline: IdleDeadline) => {
        // 如果还有未处理的块，继续处理
        while (offset < file.size && deadline.timeRemaining() > 0) {
            // 计算分片起始和结束位置
            const start = offset;
            const end = Math.min(offset + CHUNK_SIZE, file.size);
            // 读取分片数据
            const chunk = file.slice(start, end);
            // 将分片数据添加到SparkMD5实例中
            promises.push(
                readBlobAsArrayBuffer(chunk).then((buffer) => {
                    // 计算分片哈希值
                    spark.append(buffer);
                    const hash = spark.end();
                    // 拿到blob对象
                    const blob = new Blob([chunk]);
                    // 将分片信息添加到chunks数组中
                    chunks.push({
                        start,
                        end,
                        index,
                        hash,
                        blob
                    });
                    // 更新分片索引
                    index++;
                })
            );
            // 更新偏移量
            offset += chunk.size;
        }
        // 如果还有未处理的块，继续使用 requestIdleCallback
        if (offset < file.size) {
            window.requestIdleCallback(sliceAndHash);
        } else {
            // 并发处理所有切片和哈希操作
            Promise.all(promises);
        }
    };

    // 开始切片和哈希，需要浏览器支持 requestIdleCallback
    // 注：也可以使用 workjs
    window.requestIdleCallback(sliceAndHash);

    return new Promise((resolve) => {
        // 等待所有切片处理完毕
        resolve(chunks);
    });
};

/**
 * 读取Blob为ArrayBuffer
 *
 * @param blob  Blob对象
 *
 * @returns 读取后的ArrayBuffer
 */
function readBlobAsArrayBuffer(blob: Blob): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
        // 创建FileReader对象
        const reader = new FileReader();
        // 读取Blob对象
        reader.onload = (event) => {
            // 如果读取成功，返回ArrayBuffer对象
            if (event.target?.result instanceof ArrayBuffer) {
                resolve(event.target.result);
            } else {
                // 如果读取失败，抛出错误
                reject(new Error('Failed to read blob as ArrayBuffer'));
            }
        };
        // 处理读取错误
        reader.onerror = (event) => {
            // 如果读取失败，抛出错误
            reject(reader.error || new Error(`Unknown FileReader error: ${event.target?.error}`));
        };
        // 读取Blob对象为ArrayBuffer
        reader.readAsArrayBuffer(blob);
    });
}
