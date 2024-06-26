import { Method } from 'axios';

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
export declare const send: (baseUrl: string | undefined, url: string, param: any | null, method: Method | null, returnPromise: boolean | null, errorResponse: Function | null, callback?: Function) => Promise<import('axios').AxiosResponse<any, any>> | undefined;
export declare const Axios: import('axios').AxiosStatic;
