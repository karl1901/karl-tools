export default {
    // 接口地址
    // 接口文档：https://service.huhuiyu.top/teach_project_service/doc.html
    baseUrl: {
        dev: 'https://service.huhuiyu.top',
        server: 'https://service.huhuiyu.top'
    },

    // 请求超时时间 (ms)
    timeout: 30 * 1000,

    // 本地token储存key
    tokenLocalKey: 'vtsvTokenInfo',

    // 本地token储存时间 (ms)
    tokenLocalSaveTime: 30 * 60 * 1000,

    /**
     * 保存token
     *
     * @param key key
     * @param token token令牌
     * @param expire 过期时间
     */
    saveToken: (key: string, token: string, expire: number) => {
        // 储存信息对象声明
        const obj = {
            token: token,
            expire: Date.now() + expire
        };
        // 保存信息
        localStorage.setItem(key, JSON.stringify(obj));
    },

    /**
     * 加载token
     * @param key key
     * @returns token令牌
     */
    loadToken: (key: string) => {
        // 获取保存的信息
        const localInfo = localStorage.getItem(key);
        // 信息存在，就取token
        if (localInfo) {
            const { token } = JSON.parse(localInfo);
            return token;
        }
    },

    /**
     * 检验token是否过期
     *
     * @param key key
     */
    checkToken: (key: string) => {
        // 获取保存的信息
        const localInfo = localStorage.getItem(key);
        // 信息存在
        if (localInfo) {
            // 获取过期时间
            const { expire } = JSON.parse(localInfo);
            // 校验是否过期，是就移除信息
            if (Date.now() > expire) {
                localStorage.removeItem(key);
            }
        }
    }
};
