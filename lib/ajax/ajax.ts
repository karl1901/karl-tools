import axios, { Method } from 'axios';
import qs from 'qs';

/**
 * Ajax请求封装函数
 *
 * @description 封装axios请求，支持返回Promise对象和回调函数两种方式
 *
 * @author karl
 *
 * @param baseUrl 请求地址前缀
 * @param param 请求参数
 * @param url 请求地址
 * @param param 请求参数
 * @param method 请求方式
 * @param returnPromise 是否返回Promise对象
 * @param errorResponse 是否返回自定义错误信息函数，函数可接收一个参数(类型：any)，即请求发生错误的信息
 * @param callback  回调函数，可接收一个参数(类型：any)，即请求返回的结果
 *
 * @returns Promise对象或回调函数
 */
export const send = (
    baseUrl: string | undefined,
    url: string,
    param: any | null,
    method: Method | null,
    returnPromise: boolean | null,
    errorResponse: Function | null,
    callback?: Function
) => {
    // 请求参数格式化
    param = qs.stringify(param, { allowDots: true });
    // 请求方式处理
    method = method ? method : 'POST';
    // 处理GET请求
    if (method.toUpperCase() === 'GET') {
        url += '?' + param;
        param = '';
    }
    // 获取请求返回结果的promise对象
    const promise = axios({
        baseURL: baseUrl,
        url: url,
        method: method,
        data: param
    });
    // 校验是否返回promise对象
    if (returnPromise) {
        return promise;
    }
    // 回调函数返回请求结果
    promise
        .then((resp) => {
            // 校验请求结果并返回
            if (resp && resp.data) {
                callback ? callback(resp.data) : null;
            }
        })
        .catch((err) => {
            // 打印请求错误信息，返回错误信息结果
            console.log('An error occurred on the request:{}', err);
            // 校验是否需要返回自定义错误信息
            const errorMessage = errorResponse
                ? errorResponse(err)
                : { code: 500, data: err, message: `An error occurred on the request: ${err}`, success: false };
            // 返回错误信息
            callback ? callback(errorMessage) : null;
        });
};

// 导出axios对象
export const Axios = axios;
