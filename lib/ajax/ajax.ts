import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import qs, { IStringifyOptions } from 'qs';

// 定义Ajax请求函数的可选配置对象
interface RequestOptions {
    /**
     * 请求地址前缀（必填）
     *
     * @description 请求地址前缀，如果你传入了自定义Axios实例，此项会默认合并到自定义Axios实例的baseURL中
     */
    baseUrl: string;

    /**
     * 请求地址（必填）
     *
     * @description 请求地址，如果是GET请求会自动拼接在baseUrl后面
     */
    url: string;

    /**
     * 请求参数（可选）
     *
     * @description 请求参数，如果是GET请求会自动格式化后并拼接在url后面
     */
    param?: any;

    /**
     * 请求方式（可选）
     *
     * @description 请求方式，默认为 POST
     */
    method?: Method;

    /**
     * 是否返回 Promise 对象（可选）
     *
     * @description 默认为 false，不返回 Promise 对象
     *
     */
    returnPromise?: boolean;

    /**
     * 自定义错误信息函数（可选）
     *
     * @description 当请求发生错误时，返回一个自定义的错误响应
     *
     * @param error 错误信息对象（回调参数）
     *
     * @returns 自定义的错误响应
     */
    errorResponse?: (error: any) => any;

    /**
     * 请求成功后的回调函数（可选）
     *
     * @description returnPromise=false时生效
     *
     * @param data 返回的数据
     */
    callback?: (data: any) => void;

    /**
     * 自定义axios实例（可选）
     *
     * @description 如果需要使用自定义的axios实例，可以在这里传入
     */
    axiosInstance?: AxiosInstance;

    /**
     * 自定义qs参数格式化配置（可选）
     *
     * @description 如果需要使用自定义的qs参数格式化配置，可以在这里传入
     *
     */
    qsOptions?: IStringifyOptions;

    /**
     * 自定义拦截器（可选）
     *
     * @description 如果需要使用自定义的拦截器，可以在这里传入，不论是否传入自定义Axios实例，都会回调一个当前axios实例
     *
     * @param axiosInstance axios实例（回调参数）
     */
    interceptors?: (axiosInstance: AxiosInstance) => void;
}

// 模块Axios实例，保证每次请求的实例都是唯一的
const karlAxiosInstance: AxiosInstance = axios.create({
    timeout: 60 * 1000 // 请求超时时间
});

/**
 * Ajax请求封装函数
 *
 * @description 封装axios请求，支持返回Promise对象和回调函数两种方式
 *
 * @author karl
 *
 * @param options 可选配置对象
 *
 * @returns Promise对象或回调函数
 */
export const send = (options: RequestOptions): Promise<any> | void => {
    // 默认配置参数处理
    let {
        baseUrl,
        url,
        param = null,
        method = 'POST',
        returnPromise = false,
        errorResponse,
        callback,
        axiosInstance,
        qsOptions = { allowDots: true },
        interceptors
    } = options || {};

    // 校验baseUrl和url是否为空
    if (!baseUrl || !url) {
        throw new Error('baseUrl and url are required');
    }

    // 使用提供的 axios 实例或全局共享实例
    const sendAxiosInstance = axiosInstance || karlAxiosInstance;

    // 请求参数格式化
    let formattedParam = qs.stringify(param, qsOptions);

    // 处理GET请求
    if (method.toUpperCase() === 'GET') {
        // 拼接参数
        url += `?${formattedParam}`;
        formattedParam = '';
    }

    // 创建请求配置
    const requestConfig: AxiosRequestConfig = {
        baseURL: baseUrl,
        url: url,
        method: method,
        data: formattedParam
    };
    // 合并配置参数
    const finalConfig = Object.assign(requestConfig, sendAxiosInstance.defaults);

    // 校验是否需要自定义拦截器
    if (interceptors) {
        // 调用自定义拦截器
        interceptors(sendAxiosInstance);
    }

    // 发起请求
    const promise = sendAxiosInstance(finalConfig);

    // 校验是否返回promise对象
    if (returnPromise) {
        // 返回promise对象
        return promise;
    }

    // 回调函数返回请求结果
    promise
        .then((resp) => {
            // 校验请求结果并返回
            if (resp && resp.data) {
                // 返回请求结果
                callback && callback(resp.data);
            }
        })
        .catch((err) => {
            // 打印请求错误信息，返回错误信息结果
            console.error('An error occurred on the request:', err);
            // 校验是否需要返回自定义错误信息
            const errorMessage = errorResponse
                ? errorResponse(err)
                : { code: 500, data: err, message: `An error occurred on the request: ${err}`, success: false };
            // 返回错误信息
            callback && callback(errorMessage);
        });
};

// 导出此模块的Axios实例
export default karlAxiosInstance;
