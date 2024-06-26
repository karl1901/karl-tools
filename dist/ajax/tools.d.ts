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
export declare const concurRequest: (requestFuns: Promise<any>[], maxNum: number) => Promise<unknown>;
