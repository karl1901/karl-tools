/**
 * 格式化日期时间
 *
 * @description 对日期时间进行格式化
 *
 * @author karl
 *
 * @param date 日期时间
 * @param formatStr 格式化字符串，默认：yyyy-MM-dd hh:mm:ss
 * @param errResStr 发生错误时返回的字符串，默认：空字符串
 *
 * @returns 格式化后的结果
 */
export const formatDate = (date: any, formatStr: string | null, errResStr: string | null) => {
    try {
        if (!isNaN(date) && !(date instanceof Date)) {
            date = new Date(date);
        }
        formatStr = formatStr ? formatStr : 'yyyy-MM-dd hh:mm:ss';
        let year = date.getFullYear() + '';
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        month = month < 10 ? '0' + month : '' + month;
        day = day < 10 ? '0' + day : '' + day;
        hour = hour < 10 ? '0' + hour : '' + hour;
        minute = minute < 10 ? '0' + minute : '' + minute;
        second = second < 10 ? '0' + second : '' + second;
        formatStr = formatStr.replace(/yyyy/g, year);
        formatStr = formatStr.replace(/MM/g, month);
        formatStr = formatStr.replace(/dd/g, day);
        formatStr = formatStr.replace(/hh/g, hour);
        formatStr = formatStr.replace(/mm/g, minute);
        formatStr = formatStr.replace(/ss/g, second);
        return formatStr;
    } catch (error) {
        console.error(error);
        return errResStr == null ? '' : errResStr;
    }
};

/**
 * 格式化数字
 *
 * @description 将数字格式化为字符串，间隔为逗号
 *
 * @author karl
 *
 * @param num 数字
 * @param intervalNum 逗号间隔，默认：3
 *
 * @returns 格式化后的结果
 */
export const formatCommas = (num: number, intervalNum: number | null): string => {
    const str: string = num.toString();
    const parts: string[] = str.split('.');
    intervalNum = intervalNum == null || intervalNum <= 0 ? 3 : intervalNum;
    const regex = new RegExp(`(\\d)(?=(\\d{${intervalNum}})+(?!\\d))`, 'g');
    const integerPart: string = parts[0].replace(regex, '$1,');
    if (parts.length > 1) {
        return integerPart + '.' + parts[1];
    } else {
        return integerPart;
    }
};

/**
 * 打开文件选择器
 *
 * @description 打开客户端本地文件资源选择器
 *
 * @author karl
 *
 * @param cb 选择文件后的回调函数
 * @param isMultiple 是否多选，默认：否
 */
export const openChooseFile = (cb: (files: FileList | null) => void, isMultiple: boolean | null): void => {
    isMultiple = isMultiple == null ? false : isMultiple;

    let eleFile: HTMLInputElement = document.createElement('input');
    eleFile.setAttribute('type', 'file');

    if (isMultiple) {
        eleFile.setAttribute('multiple', 'true');
    }

    eleFile.addEventListener('change', function () {
        if (eleFile.files && eleFile.files.length > 0) {
            cb(eleFile.files);
        } else {
            cb(null);
        }
    });

    eleFile.addEventListener('cancel', function () {
        cb(null);
    });

    eleFile.click();
};

/**
 * 格式化文件大小
 *
 * @description 将文件大小进行合理格式化
 *
 * @author karl
 *
 * @param size 文件大小
 *
 * @returns 格式化后的结果
 */
export const formatFileSize = (size: string | null): string => {
    if (size == null || size === '') {
        return '0B';
    }
    const unitArr: string[] = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let index: number = 0;
    const srcSize: number = parseFloat(size);
    index = Math.floor(Math.log(srcSize) / Math.log(1024));
    let sizes: number = srcSize / Math.pow(1024, index);
    sizes = Number(sizes.toFixed(2));
    return sizes + unitArr[index];
};

/**
 * 复制文本内容
 *
 * @description 复制文本到剪切板
 *
 * @author karl
 *
 * @param str 文本内容
 * @param isShowOk 是否打印复制成功的消息，默认：否
 */
export const copyText = async (str: string, isShowOk: boolean | null): Promise<void> => {
    return navigator.clipboard
        .writeText(str)
        .then(() => {
            if (isShowOk || isShowOk == null) {
                console.log('文本已成功复制到剪贴板');
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

/**
 * 跨域请求处理函数
 *
 * @description 请求跨域问题处理函数
 *
 * @author karl
 *
 * @param fun 要处理的请求函数
 * @param credentials 请求凭据
 * @param cross 请求域
 */
export const requestInfos = (fun: Function, credentials: number, cross: number) => {
    const generateUniqueRandomNumber = (credentials: any, cross: any): any => {
        let randomNumber: any;
        do {
            randomNumber = Math.floor(Math.random() * (cross - credentials + 1)) + credentials;
        } while (randomNumber === (generateUniqueRandomNumber as any).lastNumber);
        (generateUniqueRandomNumber as any).lastNumber = randomNumber;
        return randomNumber;
    };
    setTimeout(fun, generateUniqueRandomNumber(credentials, cross));
};

/**
 * 关键字着色
 *
 * @description 原文中的关键字内容会着色
 *
 * @author karl
 *
 * @param original 原文
 * @param keywords 关键字
 * @param nullResStr 值为空返回的内容
 * @param isCapitalization 是否区分大小写，默认：区分大小写
 * @param keywordsColor 关键字着色，默认：红色
 *
 * @returns 处理后的内容
 */
export const searchKeywordInfo = (
    original: any,
    keywords: any,
    nullResStr: any,
    isCapitalization: boolean | null,
    keywordsColor: any | null
) => {
    // 转换数据类型
    original = String(original);
    keywords = String(keywords);
    nullResStr = String(nullResStr);
    keywordsColor = String(keywordsColor);
    // 判断原文和关键值是否为空
    const bVal = original == 'null' || original == '';
    if (bVal || keywords == '') {
        return bVal ? nullResStr : original;
    }
    // 不区分大小写  const Reg = new RegExp(keywords, 'i');
    // 全局替换  const Reg = new RegExp(keywords, 'g');
    let regStr = isCapitalization ? 'g' : 'ig';
    const Reg = new RegExp(keywords, regStr);
    if (original && original != '') {
        keywordsColor = keywordsColor == null ? '#ff0000' : keywordsColor;
        // 注意 这里推荐使用正则占位符$& 不使用${keywords}  因为当这里使用正则表达式（i）不区分大小写时，如果你的文本是大写，搜索的关键字是小写，匹配结果会替换掉大写的文本
        // const res = original.replace(Reg, `<span style="background-color: yellow;">${keywords}</span>`);
        const res = original.replace(Reg, `<span style="color: ${keywordsColor};">$&</span>`);
        return res;
    }
};

/**
 * 根据关键字查找集合中符合条件的数据
 *
 * @description 包含所有字段，可查找树形数据集合
 *
 * @author karl
 *
 * @param list 数据集合
 * @param keywords 关键字
 *
 * @returns 查找结果集合
 */
export const searchKeywordList = (list: any, keywords: string) => {
    const isObjectOrArray = (value: any): boolean => {
        return typeof value === 'object' && value !== null;
    };
    const searchInObjectOrArray = (data: any, keywords: string): boolean => {
        for (let key in data) {
            let value = data[key];
            if (isObjectOrArray(value)) {
                if (searchInObjectOrArray(value, keywords)) {
                    return true;
                }
            } else {
                let stringValue = String(value);
                if (stringValue.toLowerCase().includes(keywords.toLowerCase())) {
                    return true;
                }
            }
        }
        return false;
    };
    return list.filter((item: any) => {
        if (isObjectOrArray(item)) {
            return searchInObjectOrArray(item, keywords);
        } else {
            let value = String(item);
            return value.toLowerCase().includes(keywords.toLowerCase());
        }
    });
};

/**
 * 集合信息比对匹配
 *
 * @description 匹配数据集合中对比字段的值是否与对比值一致，若一致则返回匹配结果
 *
 * @author karl
 *
 * @param list 数据集合
 * @param attributeName 比对字段名
 * @param searchValue 比对值
 * @param returnName 返回字段名，默认：返回整个对象
 * @param nullResStr 匹配对象为空的返回值
 *
 * @returns 匹配结果
 */
export const searchTypeList = (
    list: any[],
    attributeName: string,
    searchValue: any,
    returnName: string | null,
    nullResStr: string
): any | null => {
    const checkObjectProperties = (obj: any): any => {
        for (let key in obj) {
            if (!obj[key]) {
                obj[key] = nullResStr;
            }
        }
        return obj;
    };

    for (const obj of list) {
        if (obj[attributeName] === searchValue) {
            if (returnName) {
                return obj[returnName];
            }
            return checkObjectProperties(obj);
        }
    }
    return null;
};

/**
 * 集合排序
 *
 * @description 根据排序规则对数据集合进行排序
 *
 * @author karl
 *
 * @param list 数据集合
 * @param order 排序规则：ascending-升序，descending-降序
 * @param field 排序字段
 *
 * @returns 排序后的集合
 */
export const sortList = <T>(list: T[], order: 'ascending' | 'descending', field: keyof T): T[] => {
    const sortedList = [...list];
    sortedList.sort((a, b) => {
        const valueA = a[field] as number | undefined;
        const valueB = b[field] as number | undefined;

        if (typeof valueA === 'undefined' || typeof valueB === 'undefined') {
            return valueA === valueB ? 0 : valueA === undefined ? 1 : -1;
        }

        if (order === 'ascending') {
            if (valueA < valueB) return -1;
            if (valueA > valueB) return 1;
            return 0;
        } else if (order === 'descending') {
            if (valueA > valueB) return -1;
            if (valueA < valueB) return 1;
            return 0;
        } else {
            return 0;
        }
    });
    return sortedList;
};

/**
 * 保存信息到本地
 *
 * @description 将信息保存到 LocalStorage 中
 *
 * @author karl
 *
 * @param key 保存关键词
 * @param info 要保存的信息
 * @param expire 信息过期时间（时间戳，毫秒级）
 */
export const saveLocalInfo = (key: string, info: string, expire: number) => {
    const obj = {
        info: info,
        expire: Date.now() + expire
    };
    localStorage.setItem(key, JSON.stringify(obj));
};

/**
 * 加载本地保存的信息
 *
 * @description 将保存在 LocalStorage 中的信息取出
 *
 * @author karl
 *
 * @param key 保存关键词
 *
 * @returns 本地保存的信息
 */
export const loadLocalInfo = (key: string) => {
    const localInfo = localStorage.getItem(key);
    if (localInfo) {
        const { info } = JSON.parse(localInfo);
        return info;
    }
    return null;
};

/**
 * 检验本地保存的信息是否过期
 *
 * @description 检验保存在 LocalStorage 中的信息是否过期
 *
 * @author karl
 *
 * @param key 保存关键词
 */
export const checkLocalInfo = (key: string) => {
    const localInfo = localStorage.getItem(key);
    if (localInfo) {
        const { expire } = JSON.parse(localInfo);
        if (Date.now() > expire) {
            localStorage.removeItem(key);
        }
    }
};
