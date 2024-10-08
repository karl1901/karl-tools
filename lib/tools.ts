/**
 * 格式化日期时间
 *
 * @description 对日期时间进行格式化
 *
 * @author karl
 *
 * @param date 日期时间
 * @param formatStr 格式化字符串（可选），默认：yyyy-MM-dd hh:mm:ss:ms
 * @param errResStr 发生错误时返回的字符串（可选），默认：空字符串
 *
 * @returns 格式化后的结果
 */
export const formatDate = (date: any, formatStr?: string, errResStr?: string) => {
    try {
        if (!isNaN(date) && !(date instanceof Date)) {
            date = new Date(date);
        }
        formatStr = formatStr ? formatStr : 'yyyy-MM-dd hh:mm:ss:ms';
        let year = date.getFullYear() + '';
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let millisecond = date.getMilliseconds();
        month = month < 10 ? '0' + month : '' + month;
        day = day < 10 ? '0' + day : '' + day;
        hour = hour < 10 ? '0' + hour : '' + hour;
        minute = minute < 10 ? '0' + minute : '' + minute;
        second = second < 10 ? '0' + second : '' + second;
        millisecond = millisecond < 10 ? '0' + millisecond : '' + millisecond;
        formatStr = formatStr.replace(/yyyy/g, year);
        formatStr = formatStr.replace(/MM/g, month);
        formatStr = formatStr.replace(/dd/g, day);
        formatStr = formatStr.replace(/hh/g, hour);
        formatStr = formatStr.replace(/mm/g, minute);
        formatStr = formatStr.replace(/ss/g, second);
        formatStr = formatStr.replace(/ms/g, millisecond);
        return formatStr;
    } catch (error) {
        console.error(error);
        return errResStr ? errResStr : '';
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
 * @param intervalNum 逗号间隔（可选），默认：3
 *
 * @returns 格式化后的结果
 */
export const formatCommas = (num: number, intervalNum?: number): string => {
    const str: string = num.toString();
    const parts: string[] = str.split('.');
    intervalNum = !intervalNum || intervalNum <= 0 || intervalNum >= num.toString().length ? 3 : intervalNum;
    const regex = new RegExp(`(\\d)(?=(\\d{${intervalNum}})+(?!\\d))`, 'g');
    const integerPart: string = parts[0].replace(regex, '$1,');
    if (parts.length > 1) {
        return integerPart + '.' + parts[1];
    }
    return integerPart;
};

/**
 * 打开文件选择器
 *
 * @description 打开客户端本地文件资源选择器
 *
 * @author karl
 *
 * @param cb 选择文件后的回调函数
 * @param pattern 选择文件模式（可选），默认：单选文件；可选：多选文件（Multiple）、选择文件夹（Directory）
 */
export const openChooseFile = (cb: (files: FileList | null) => void, pattern?: 'Multiple' | 'Directory'): void => {
    let eleFile: HTMLInputElement = document.createElement('input');
    eleFile.setAttribute('type', 'file');

    if (pattern && pattern === 'Multiple') {
        eleFile.setAttribute('multiple', 'true');
    }

    if (pattern && pattern === 'Directory') {
        eleFile.setAttribute('webkitdirectory', 'true');
        eleFile.setAttribute('mozdirectory', 'true');
        eleFile.setAttribute('odirectory', 'true');
    }

    eleFile.addEventListener('change', function () {
        cb(eleFile.files);
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
export const formatFileSize = (size?: string | number | null): string => {
    if (!size || size === '') {
        return '0B';
    }
    const unitArr: string[] = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let index: number = 0;
    const srcSize: number = typeof size === 'string' ? parseFloat(size) : size;
    if (Number.isNaN(srcSize)) throw new Error('The size is not a number');
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
 * @param cb 复制成功后的回调函数（可选），str：复制的文本内容
 */
export const copyText = async (str: string, cb?: (str: string) => void): Promise<void> => {
    return navigator.clipboard
        .writeText(str)
        .then(() => {
            cb && cb(str);
        })
        .catch((error) => {
            console.error(error);
        });
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
 * @param nullResStr 值为空返回的内容（可选），默认：空字符串
 * @param isCapitalization 是否区分大小写（可选），默认：区分大小写
 * @param keywordsColor 关键字着色的颜色（可选），默认：红色
 *
 * @returns 处理后的内容
 */
export const searchKeywordInfo = (original: any, keywords: any, nullResStr?: any, isCapitalization?: boolean, keywordsColor?: string) => {
    // 转换数据类型
    original = String(original);
    // 判断原文和关键值是否为空
    const bVal = original == 'null' || original == '';
    if (bVal || keywords == '') {
        nullResStr = nullResStr ? nullResStr : '';
        return bVal ? nullResStr : original;
    }
    // 不区分大小写  const Reg = new RegExp(keywords, 'i');
    // 全局替换  const Reg = new RegExp(keywords, 'g');
    let regStr = isCapitalization ? 'g' : 'ig';
    const Reg = new RegExp(keywords, regStr);
    if (original && original != '') {
        keywordsColor = keywordsColor ? keywordsColor : '#ff0000';
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
export const searchKeywordList = (list: any[], keywords: string) => {
    if (keywords == '') return list;
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
 * @param nullResStr 匹配对象为空的返回值
 * @param returnName 返回字段名（可选），默认：返回整个对象
 *
 * @returns 匹配结果
 */
export const searchTypeList = <T>(
    list: T[],
    attributeName: keyof T,
    searchValue: any,
    nullResStr: string,
    returnName?: keyof T
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
 * @description 根据排序规则对数据集合进行排序，注：汉字会按照中华字典顺序排序
 *
 * @author karl
 *
 * @param list 数据集合
 * @param order 排序规则：ascending：升序，descending：降序
 * @param field 排序字段
 *
 * @returns 排序后的集合
 */
export const sortList = <T>(list: T[], order: 'ascending' | 'descending', field: keyof T): T[] => {
    const sortedList = [...list];
    sortedList.sort((a, b) => {
        const valueA = a[field] as number | string | undefined;
        const valueB = b[field] as number | string | undefined;

        if (typeof valueA === 'undefined' || typeof valueB === 'undefined') {
            return valueA === valueB ? 0 : valueA === undefined ? 1 : -1;
        }
        if (typeof valueA === 'number' && typeof valueB === 'number') {
            return order === 'ascending' ? valueA - valueB : valueB - valueA;
        }
        if (typeof valueA === 'string' && typeof valueB === 'string') {
            const comparison = valueA.localeCompare(valueB);
            return order === 'ascending' ? comparison : -comparison;
        }
        return 0;
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
 * @param expire 信息过期时间（可选，时间戳，毫秒级）
 */
export const saveLocalInfo = (key: string, info: string, expire?: number) => {
    if (expire) {
        const obj = {
            info: info,
            expire: Date.now() + expire
        };
        localStorage.setItem(key, JSON.stringify(obj));
        return;
    }
    localStorage.setItem(key, JSON.stringify({ info: info }));
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

/**
 * 移除本地保存的信息
 *
 * @description 将保存在 LocalStorage 中的信息移除
 *
 * @author karl
 *
 * @param key 保存关键词
 */
export const removeLocalInfo = (key: string) => {
    localStorage.removeItem(key);
};

/**
 * 字符串掩盖格式化
 *
 * @description 对字符串进行星号掩盖格式化
 *
 * @author karl
 *
 * @param str 要格式的字符串
 * @param preserveStart 前置保留数
 * @param preserveEnd 后置保留数
 * @param starCount 星号数量（可选），默认：除保留数外的字符数
 *
 * @returns 格式化后的字符串
 */
export const maskStr = (str: string, preserveStart: number, preserveEnd: number, starCount?: number) => {
    if (preserveStart < 0 && preserveEnd < 0) {
        throw new Error('preserveStart and preserveEnd cannot be both less than 0');
    }
    preserveStart = preserveStart < 0 ? 1 : preserveStart;
    preserveEnd = preserveEnd < 0 ? 1 : preserveEnd;
    starCount = starCount || str.length - preserveStart - preserveEnd;
    const length = str.length;
    if (length <= preserveStart + preserveEnd) {
        return str;
    }
    const start = str.slice(0, preserveStart);
    const middle = '*'.repeat(starCount);
    const end = str.slice(length - preserveEnd);
    return start + middle + end;
};
