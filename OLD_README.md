# karl的工具库

> 介绍：个人开源npm工具库，觉得好用可以点个start  
>
> 地址：[点击打开 - npm仓库](https://www.npmjs.com/package/karl-tools)  
>
> 安装：`npm i karl-tools`

## 发布版本

> 1.0.0  工具库初代  
>
> 1.0.1 添加了本地信息保存、本地信息加载、校验本地信息是否过期的函数  
>
> 1.0.2 添加了 vue 数字滚动小组件，支持小数  
>
> 1.0.3 修正了组件路径错误引入的问题  
>
> 1.0.4 优化了说明文档的格式，添加了字符串掩盖格式化函数  
>
> 1.0.5 添加了文档的说明和工具使用方法，添加了组件按需导入的功能  
>
> 1.0.6 格式化日期的函数添加了毫秒显示，默认格式为：yyyy-MM-dd hh:mm:ss:ms  
>
> 1.0.7 添加了基于Axios的Ajax请求封装函数，并导出了Axios实例供调用者自定义配置和拦截器等；添加了基于发布者-订阅者模式的事件处理器工具类  
>
> 1.0.8 修复了Ajax请求封装函数工具的bug  
>
> 1.0.9 更新了工具说明文档，添加了工具函数和事件处理器的说明文档  
>
> 1.1.0 添加了并发请求函数，并更新了说明文档  
>
> 1.1.1 修改了整体架构，去掉了组件和页面功能，优化了工具库的兼容性，将返回的中文内容改为英文内容  
>
> 1.1.2 添加了qs依赖和版本说明，修改了工具库的配置文件  
>
> 1.1.3 修复了ts类型无提示和导入问题  
>
> 1.1.4 修复了文件路径引入错误的问题  

## 已发布内容

### 1、工具函数

#### 函数使用方法

1、导入

页面 Vue 文件中

```js
// 导入整个模块
import * as karlTools from 'karl-tools';
```

或

```js
// 按需导入
import { formatDate } from 'karl-tools';
```


2、使用

```js
// 写一个获取当时时间，并格式化的方法
showNow() {
            return karlTools.formatDate(new Date(), 'yyyy年MM月dd日 hh:mm:ss', null);
          }
```

或

```js
// 写一个获取当时时间，并格式化的方法
showNow() {
            return formatDate(new Date(), 'yyyy年MM月dd日 hh:mm:ss', null);
          }
```

```html
<!-- 使用获取当前时间的方法 -->
<div>{{ showNow() }}</div>
```

3、效果

![Snipaste_20231010_153251.png](http://karl-blog.oss-cn-shenzhen.aliyuncs.com/aurora/articles/70eca9c11769935aa6e081be2b4ec2bf.png)  

#### 函数列表

- formatDate：`格式化日期时间`，例如：2023-10-09 12:00:00、2023年10月09日 12:00:00...
- formatCommas：`格式化数字`，例如：10,000,000、10,000.00...
- openChooseFile：`打开文件选择器`，支持单选、多选
- formatFileSize：`格式化文件大小`，例如：100KB、130MB...
- copyText：`复制文本内容`，支持控制台打印复制结果
- searchKeywordInfo：`关键字着色`，常用于搜索结果字符串标色
- searchKeywordList：`根据关键字查找集合中符合条件的数据`，常用于查找集合中包含条件的所有内容，支持嵌套结构
- searchTypeList：`集合信息比对匹配`，常用于获取两集合中含有的相同内容
- sortList：`集合排序`，常用于集合排序，例如：商品集合中根据商品价格排序，支持升序、降序
- saveLocalInfo：`保存信息到本地`，常用于保存token
- loadLocalInfo：`加载本地保存的信息`，常用于保存的token
- checkLocalInfo：`检验本地保存的信息是否过期`，常用于校验token是否过期
- maskStr：`字符串掩盖格式化`，例如：136\*\*\*6343、房东\*\*\*猫、游客k1\*\*ws...
- concurRequest：`并发请求工具函数`，可控制并发数，不受浏览器限制，但是受服务器限制，如果服务器限制了并发数，那么这个函数就无法实现并发请求

### 2、Axios - Ajax请求封装函数工具

ps：工具使用到的库以及版本如下  
1、@types/qs: `6.9.15`  
2、qs: `6.12.1`  
3、axios: `1.7.2`  

请求函数：send  

请求参数：  

url：`请求地址`  
param：`请求参数`  
method：`请求方式`  
returnPromise：`是否返回Promise对象`  
errorResponse：`是否返回自定义错误信息函数，函数可接收一个参数(类型：any)，即请求发生错误的信息`  
callback：`回调函数，可接收一个参数(类型：any)，即请求返回的结果`  

返回值：Promise对象或回调函数  

使用示例：

```ts
// Axios内容导入
import { Method } from 'axios';
// 导入Ajax请求封装函数工具、Axios实例
import { send, Axios } from 'karl-tools';

// 项目请求地址（有的项目会有多个请求地址）
const ServerBaseUrl = {
    server: 'http://127.0.0.1:8080',
    baidu: 'https://api.baidu.com',
    aliyun: 'https://api.aliyun.com'
    otherApi: 'https://api.xxx.com'
};

type ServerBaseUrl = typeof ServerBaseUrl;

/**
 * 自定义错误信息处理函数
 * 
 * @description 返回一个对象，自定义请求发生错误时的返回信息
 *
 * @param err 错误信息
 *
 * @returns 返回的错误信息
 */
const errorResponse = (err: any) => {
    return {
        code: 500,
        msg: `服务器异常:${err}`,
        data: err
    };
};

// 当前项目自定义的请求函数（二次封装），并导出
export const request = (
    base: keyof ServerBaseUrl,
    url: string,
    param: any | null,
    method: Method | null,
    returnPromise: boolean | null,
    cb?: Function
) => {
    // 返回请求结果
    return send(base, url, param, method, returnPromise, errorResponse, cb);
};

// 使用Axios实例，自定义请求拦截器
Axios.interceptors.request.use(
    (req) => {
        return req;
    },
    (err) => {
        console.log('请求拦截器错误信息:{}', err);
        return Promise.reject(err);
    }
);

// 使用Axios实例，自定义响应拦截器
Axios.interceptors.response.use(
    (req) => {
        return req;
    },
    (err) => {
        console.log('响应拦截器错误信息:{}', err);
        return Promise.reject(err);
    }
);

```

### 3、事件处理器

ps：主要用于处理项目中的事件，例如：登录过期/未授权，路由跳转到登录页面并弹出提示等

```ts
// 导入监听器工具
import { EventEmitter } from 'karl-tools';

/**
 * 项目监听事件配置中心
 */

// 定义事件名称
const customEventNamesArray = ['API:UN_AUTH', 'API:ERR_BAD_REQUEST', 'API:CUSTOM_EVENT'] as const;

// 创建监听器
const eventEmitter = new EventEmitter(customEventNamesArray);

// 监听事件配置
eventEmitter.on('API:UN_AUTH', (resp: any) => {
    console.log('未授权，请重新登录:{}', resp);
    // 路由跳转到登录页面
    // 弹出提示
    // 清除登录信息
    // ...
});

eventEmitter.on('API:ERR_BAD_REQUEST', (resp: any) => {
    console.log('请求发生错误:{}', resp);
    // 弹出提示
    // ...
});

eventEmitter.on('API:CUSTOM_EVENT', (resp: any) => {
    console.log('自定义事件=>', resp);
    // 自定义处理逻辑
    // ...
});

// 导出监听器
export { eventEmitter };

```
