import SparkMD5 from 'spark-md5';

// 监听主线程发送的消息事件
self.onmessage = (e: MessageEvent) => {
    // 从消息中解构出分片索引和数据缓冲区
    const { index, buffer } = e.data;
    // 创建 SparkMD5 的 ArrayBuffer 实例用于计算 hash
    const spark = new SparkMD5.ArrayBuffer();
    // 将数据缓冲区添加到 hash 计算中
    spark.append(buffer);
    // 计算并获取最终的 hash 值
    const hash = spark.end();
    // 向主线程发送包含索引和 hash 的消息，保证顺序正确
    (self as any).postMessage({ index, hash });
};
