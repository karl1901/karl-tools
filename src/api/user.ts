import axiosConfig from '@/config/axiosConfig';
import { send } from '@/js/server';

// 接口地址声明
const Api = {
    login: '/teach_project_service/user/auth/login',
    getUserInfo: '/teach_project_service/user/auth/getUserInfo'
};

// 用户登录方法
export const login = (params: object, cb: Function) => {
    send(
        Api.login,
        params,
        (data: any) => {
            if (data.success) {
                // 存在token就保存
                if (data && data.token) {
                    axiosConfig.saveToken(axiosConfig.tokenLocalKey, data.token, axiosConfig.tokenLocalSaveTime);
                }
            }
            cb(data);
        },
        'POST'
    );
};

// 获取用户信息方法
export const getUserInfo = (params: object, cb: Function) => {
    send(
        Api.getUserInfo,
        params,
        (data: any) => {
            cb(data);
        },
        'POST'
    );
};
