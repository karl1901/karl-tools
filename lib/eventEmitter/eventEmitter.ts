/**
 * 事件处理器
 *
 * 发布者-订阅者模式
 */
class EventEmitter<T extends string> {
    // 存储监听器
    private listeners: Record<T, Set<Function>> = {} as Record<T, Set<Function>>;

    /**
     * 初始化事件处理器
     *
     * @param {ReadonlyArray<T>} eventNames 事件名数组
     */
    constructor(private eventNames: ReadonlyArray<T>) {
        // 初始化事件监听器
        this.eventNames.forEach((eventName) => {
            this.listeners[eventName] = new Set();
        });
    }

    /**
     * 添加监听事件
     *
     * @param {K} eventName 事件名称
     * @param {Function} listener 事件处理函数
     */
    on<K extends T>(eventName: K, listener: Function) {
        // 检查事件是否存在
        if (!this.listeners[eventName]) {
            throw new Error(`Event ${eventName} does not exist`);
        }
        // 将事件处理函数添加到事件监听器中
        this.listeners[eventName].add(listener);
    }

    /**
     * 移除监听事件
     *
     * @param {K} eventName 事件名称
     * @param {Function} listener 事件处理函数
     */
    off<K extends T>(eventName: K, listener?: Function) {
        // 检查事件是否存在
        if (!this.listeners[eventName]) {
            throw new Error(`Event ${eventName} does not exist`);
        }
        // 如果传入了监听器，则从事件的监听器集合中删除该监听器，否则清空该事件的监听器集合
        listener ? this.listeners[eventName].delete(listener) : this.listeners[eventName].clear();
    }

    /**
     * 触发事件
     *
     * @param {K} eventName 事件名称
     * @param {any[]} args 事件传递的参数
     */
    async emit<K extends T>(eventName: K, ...args: any[]) {
        // 检查事件是否存在
        if (!this.listeners[eventName]) {
            throw new Error(`Event ${eventName} does not exist`);
        }
        // 获取事件的所有监听器
        const listeners = Array.from(this.listeners[eventName]);
        // 异步并发执行监听器，等待所有监听器执行完毕，确保监听器全部执行完成后才继续执行后续操作
        await Promise.all(
            listeners.map(async (listener) => {
                try {
                    // 执行事件处理函数
                    await listener(...args);
                } catch (error) {
                    // 打印错误信息
                    console.error(`An error occurred on the listener for event ${eventName}:`, error);
                }
            })
        );
    }
}

// 导出事件处理器
export { EventEmitter };
