import { AxiosInstance, Method } from 'axios';
import { IStringifyOptions } from 'qs';

interface RequestOptions {
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
     * @param error 错误信息对象
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
}
/**
 * Ajax请求封装函数
 *
 * @description 封装axios请求，支持返回Promise对象和回调函数两种方式
 *
 * @author karl
 *
 * @param baseUrl 请求地址前缀
 * @param url 请求地址
 * @param param 请求参数
 * @param method 请求方式
 * @param options 可选配置对象，包括：是否返回Promise对象、自定义错误信息函数、回调函数、自定义axios实例、自定义qs参数格式化配置
 *
 * @returns Promise对象或回调函数
 */
export declare const send: (baseUrl: string, url: string, param?: any | null, method?: Method, options?: RequestOptions) => Promise<any> | void;
export declare const Axios: import('axios').AxiosStatic;
export {};
