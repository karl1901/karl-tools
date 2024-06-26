/**
 * 并发请求
 *
 * @description 实现并发请求的函数，可控制并发数，不受浏览器限制，但是受服务器限制，如果服务器限制了并发数，那么这个函数就无法实现并发请求
 *
 * @author karl
 *
 * @param requestFuns 请求函数数组
 * @param maxNum 最大并发数
 *
 * @returns 返回请求结果
 */
export const concurRequest = (requestFuns: Promise<any>[], maxNum: number) => {
    // 如果请求函数数组为空，则返回空数组
    if (requestFuns.length === 0) return Promise.resolve([]);
    return new Promise((resolve) => {
        // 下一个请求函数对应的下标
        let index = 0;
        // 所有请求的结果
        const result = [] as any;
        // 当前完成的请求数
        let count = 0;
        // 请求的方法
        async function _request() {
            // 记录当前请求函数的下标
            const i = index;
            // 拿到当前请求的函数
            const promiseFun = requestFuns[index];
            index++;
            try {
                // 发起请求，并等待结果
                const resp = await promiseFun;
                // 将请求结果添加到结果数组中
                result[i] = resp;
            } catch (err) {
                // 将错误信息添加到结果数组中
                result[i] = err;
            } finally {
                count++;
                // 所有请求已完成
                if (count === requestFuns.length) {
                    // 返回所有请求结果数组
                    resolve(result);
                }
                // 还未完成的请求
                if (index < requestFuns.length) {
                    // 继续发起请求
                    _request();
                }
            }
        }
        // 并发请求
        for (let i = 0; i < Math.min(requestFuns.length, maxNum); i++) {
            _request();
        }
    });
};
