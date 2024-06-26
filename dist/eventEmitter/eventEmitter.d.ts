/**
 * 事件处理器
 *
 * 发布者-订阅者模式
 */
declare class EventEmitter<T extends string> {
    private eventNames;
    private listeners;
    /**
     * 初始化事件处理器
     *
     * @param {ReadonlyArray<T>} eventNames 事件名数组
     */
    constructor(eventNames: ReadonlyArray<T>);
    /**
     * 添加监听事件
     *
     * @param {K} eventName 事件名称
     * @param {Function} listener 事件处理函数
     */
    on<K extends T>(eventName: K, listener: Function): void;
    /**
     * 移除监听事件
     *
     * @param {K} eventName 事件名称
     * @param {Function} listener 事件处理函数
     */
    off<K extends T>(eventName: K, listener?: Function): void;
    /**
     * 触发事件
     *
     * @param {K} eventName 事件名称
     * @param {any[]} args 事件传递的参数
     */
    emit<K extends T>(eventName: K, ...args: any[]): Promise<void>;
}
export { EventEmitter };
