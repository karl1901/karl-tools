import axios from 'axios';
import qs from 'qs';
import { ElMessage } from 'element-plus';
import 'element-plus/dist/index.css';
import axiosConfig from '@/config/axiosConfig';

/**
 * ajax请求的方法 - 表单请求
 *
 * @param url 请求地址
 * @param params 请求参数
 * @param cb 回调函数
 * @param method 请求方法
 *
 */
export const send = (url: string, params: object, cb: Function, method: string) => {
    // 校验必要参数不能为空
    if (url.trim() === '') {
        ElMessage({
            message: '请求地址不能为空 !',
            type: 'error',
            showClose: true,
            center: true
        });
        return;
    }
    if (Object.keys(params).length === 0) {
        ElMessage({
            message: '请求参数不能为空 !',
            type: 'error',
            showClose: true,
            center: true
        });
        return;
    }
    // 请求地址分配
    url = process.env.NODE_ENV === 'production' ? axiosConfig.baseUrl.server + url : axiosConfig.baseUrl.dev + url;
    // 请求参数处理 - 表单请求模式
    const datas = qs.stringify(params, { allowDots: true });
    // 请求方法处理
    method = method ? method : 'POST';
    // 处理GET请求
    if (method.toUpperCase() === 'GET') {
        url += '?' + datas;
        params = {};
    }
    // 请求超时配置
    axios.defaults.timeout = axiosConfig.timeout;
    // 请求的promise函数
    const promise = axios({
        url: url,
        method: method,
        data: datas,
        headers: {
            token: axiosConfig.loadToken(axiosConfig.tokenLocalKey) // 加载token
        }
    });

    promise
        .then((resp) => {
            if (resp && resp.data) {
                cb(resp.data);
            }
        })
        .catch((err) => {
            console.log(err);
            cb({ code: 500, message: `请求发生错误: ${err} !`, success: false });
        });
};

// 请求拦截器
axios.interceptors.request.use(
    (req) => {
        console.log('请求拦截内容:{}', req);
        // 校验token是否过期
        axiosConfig.checkToken(axiosConfig.tokenLocalKey);
        return req;
    },
    (err) => {
        console.log(err);
        ElMessage({
            message: `请求时出错: ${err} !`,
            type: 'error',
            showClose: true,
            center: true
        });
    }
);

// 响应拦截器
axios.interceptors.response.use(
    (req) => {
        console.log('响应拦截内容:{}', req);
        return req;
    },
    (err) => {
        console.log(err);
        ElMessage({
            message: `响应时出错: ${err} !`,
            type: 'error',
            showClose: true,
            center: true
        });
    }
);
