/**
 * 格式化日期时间
 *
 * @description 对日期时间进行格式化
 *
 * @author karl
 *
 * @param date 日期时间
 * @param formatStr 格式化字符串，默认：yyyy-MM-dd hh:mm:ss:ms
 * @param errResStr 发生错误时返回的字符串，默认：空字符串
 *
 * @returns 格式化后的结果
 */
export declare const formatDate: (date: any, formatStr: string | null, errResStr: string | null) => string;
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
export declare const formatCommas: (num: number, intervalNum: number | null) => string;
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
export declare const openChooseFile: (cb: (files: FileList | null) => void, isMultiple: boolean | null) => void;
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
export declare const formatFileSize: (size: string | null) => string;
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
export declare const copyText: (str: string, isShowOk: boolean | null) => Promise<void>;
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
export declare const requestInfos: (fun: Function, credentials: number, cross: number) => void;
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
export declare const searchKeywordInfo: (original: any, keywords: any, nullResStr: any, isCapitalization: boolean | null, keywordsColor: any | null) => any;
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
export declare const searchKeywordList: (list: any, keywords: string) => any;
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
export declare const searchTypeList: (list: any[], attributeName: string, searchValue: any, returnName: string | null, nullResStr: string) => any | null;
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
export declare const sortList: <T>(list: T[], order: "ascending" | "descending", field: keyof T) => T[];
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
export declare const saveLocalInfo: (key: string, info: string, expire: number) => void;
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
export declare const loadLocalInfo: (key: string) => any;
/**
 * 检验本地保存的信息是否过期
 *
 * @description 检验保存在 LocalStorage 中的信息是否过期
 *
 * @author karl
 *
 * @param key 保存关键词
 */
export declare const checkLocalInfo: (key: string) => void;
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
 * @param starCount 星号数量，默认：除保留数外的字符数
 *
 * @returns 格式化后的字符串
 */
export declare const maskStr: (str: string, preserveStart: number, preserveEnd: number, starCount?: number) => string;
