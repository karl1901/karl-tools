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
export declare const cutAndHashFile: (file: File, CHUNK_SIZE?: number) => Promise<ChunkInfo[]>;
export {};
