<div align="center">
<a href="https://github.com/karl1901/karl-tools"><img src="https://kangxianghui.top/api/Util/OnlineView/articlePicture/karl11721975927150192.png" /></a><br>
</div>

<p align="center">一 个 免 费 的 TypeScript 工 具 库</p>

<p align="center">
    <a href="https://github.com/karl1901/karl-tools"><b>主页</b></a> •
    <a href="https://github.com/karl1901/karl-tools/blob/main/README.md"><b>文档</b></a>
</p>

<div align="center">

[![github](https://flat.badgen.net/badge/icon/github?icon=github&label)](https://github.com/karl1901/karl-tools)
[![github-stars](https://badgen.net/github/stars/karl1901/karl-tools)](https://github.com/karl1901/karl-tools)
[![npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://www.npmjs.com/package/karl-tools)
[![npm-v](https://badgen.net/npm/v/karl-tools)](https://www.npmjs.com/package/karl-tools)
[![npm-license](https://badgen.net/npm/license/karl-tools)](https://www.npmjs.com/package/karl-tools)
[![npm-dt](https://badgen.net/npm/dt/karl-tools)](https://www.npmjs.com/package/karl-tools)

</div>

<div align="center">

![Alt](https://repobeats.axiom.co/api/embed/5a33d125febc0c4ef3dd8f3551fea59f73f7557d.svg "Repobeats analytics image")

</div>

<!-- 自动生成目录：Ctrl + Shift + p，搜索MarkDown -->
<!-- 需要插件：Markdown All in One、Markdown Preview Enhanced -->
## 目录

- [目录](#目录)
- [安装](#安装)
- [发布的版本](#发布的版本)
- [已发布内容](#已发布内容)
  - [1、工具函数](#1工具函数)
    - [函数使用方法](#函数使用方法)
    - [函数列表](#函数列表)
  - [2、Axios - Ajax请求封装函数工具](#2axios---ajax请求封装函数工具)
    - [2.1、使用工具库内部的Axios实例](#21使用工具库内部的axios实例)
    - [2.2、使用自己项目安装的Axios实例](#22使用自己项目安装的axios实例)
    - [2.3、封装文件上传函数](#23封装文件上传函数)
  - [3、事件处理器](#3事件处理器)
- [贡献者](#贡献者)

## 安装

```shell
# 1、下载最新版本
npm i karl-tools
```

```shell
# 2、下载指定版本
npm i karl-tools@x.x.x
```

## 发布的版本

[更新日志](https://github.com/karl1901/karl-tools/blob/main/CHANGELOG.md)  

## 已发布内容

### 1、工具函数

#### 函数使用方法

1、导入

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
<!-- 在页面使用获取当前时间的方法 -->
<div>{{ showNow() }}</div>
<!-- 2014年01月01日 10:00:03 -->
```

#### 函数列表

| 函数              | 名称                               | 说明                                                                                                   |
| ----------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| formatDate        | 格式化日期时间                     | 例如：2023-10-09 12:00:00、2023年10月09日 12:00:00...                                                  |
| formatCommas      | 格式化数字                         | 例如：10,000,000、10,000.00...                                                                         |
| openChooseFile    | 打开文件选择器                     | 支持单选、多选，选中文件夹                                                                             |
| formatFileSize    | 格式化文件大小                     | 例如：100KB、130MB...                                                                                  |
| copyText          | 复制文本内容                       | 支持控制台打印复制结果                                                                                 |
| searchKeywordInfo | 关键字着色                         | 常用于搜索结果字符串标色                                                                               |
| searchKeywordList | 根据关键字查找集合中符合条件的数据 | 常用于查找集合中包含条件的所有内容，支持嵌套结构                                                       |
| searchTypeList    | 集合信息比对匹配                   | 常用于获取两集合中含有的相同内容                                                                       |
| sortList          | 集合排序                           | 常用于集合排序，例如：商品集合中根据商品价格排序，支持升序、降序                                       |
| saveLocalInfo     | 保存信息到本地                     | 常用于保存Token、其他信息，支持配置信息过期时间                                                        |
| loadLocalInfo     | 加载本地保存的信息                 | 常用于加载Token、本地保存的信息                                                                        |
| checkLocalInfo    | 检验本地保存的信息是否过期         | 检验本地保存的Token、其他信息是否已过期                                                                |
| removeLocalInfo   | 移除本地保存的信息                 | 常用于删除Token、本地保存的信息                                                                        |
| maskStr           | 字符串掩盖格式化                   | 例如：136\*\*\*6343、房东\*\*\*猫、游客k1\*\*ws...                                                     |
| concurRequest     | 并发请求工具函数                   | 可控制并发数，不受浏览器限制，但是受服务器限制，如果服务器限制了并发数，那么这个函数就无法实现并发请求 |
| cutAndHashFile    | 大文件分片函数                     | 将文件按照指定大小进行分片，并计算每个分片的哈希值，按照顺序返回分片后的信息集合                       |
| isBrowser         | 判断当前环境是否为浏览器           | 检测当前代码是否在浏览器环境中运行                                                                     |

### 2、Axios - Ajax请求封装函数工具

> 工具使用到的库以及版本如下  
> 1、@types/qs: `6.9.15`  
> 2、qs: `6.12.1`  
> 3、axios: `1.7.2`  

函数名称：`send`  

函数参数配置对象：  

> baseUrl：`请求地址前缀（必填）`  
> url：`请求地址（必填）`  
> param：`请求参数（可选）`  
> method：`请求方式（可选）`  
> returnPromise：`是否返回 Promise 对象（可选），如果为true，则 send 函数会返回发送请求的 Promise；反之，则会通过回调函数 - callback 返回请求结果`  
> errorResponse：`自定义错误信息函数（可选）`，当请求发生错误时，该函数会回调错误信息对象 - error，并返回自定义的错误信息，例如：`{code: 500, msg: '服务器异常', data: error}`  
> callback：`请求成功后的回调函数（可选）`  
> axiosInstance：`自定义axios实例（可选），例如：文件上传，需自定义 Content-Type 等其他各种场景`  
> qsOptions：`自定义qs参数格式化配置（可选）`  
> interceptors：`自定义拦截器（可选），不论是否传入自定义 Axios 实例，都会回调当前的 Axios 实例`  

返回值：`Promise对象 或 void`  

使用示例：

#### 2.1、使用工具库内部的Axios实例

ps：包含 - 《自定义错误信息函数》、《自定义拦截器》 的使用方式  

首先，声明拦截器添加状态属性，用于判断拦截器是否已经添加，避免重复添加拦截器  

ps：实现拦截器状态管理的方式有很多种，具体你自己定义  

```ts
// axios.d.ts
import 'axios';

declare module 'axios' {
    interface AxiosInstance {
        __requestInterceptorAdded?: boolean; // 是否已经添加了请求拦截器
        __responseInterceptorAdded?: boolean; // 是否已经添加了响应拦截器
    }
}

```

```ts
// 导入axios的类型声明
import { AxiosInstance, Method } from 'axios';
// 导入send函数，用于发送请求
import { send } from 'karl-tools';

// 设置请求的地址前缀
const BASE_URL = 'xxxxxx';

/**
 * 自定义错误信息处理函数（可选，这里只是做演示，教大家如何使用）
 *
 * @author Karl
 *
 * @description 返回一个对象，自定义请求发生错误时的返回信息，只有在返回方式为回调函数时才会生效
 *
 * @param error {any} 请求发生错误的信息
 *
 * @returns 返回的错误信息
 */
const errorResponse = (error: any) => {
    return { code: 500, msg: '服务器异常', data: error };
};

/**
 * Axios自定义请求拦截器和响应拦截器（可选，这里只是做演示，教大家如何使用）
 *
 * @author Karl
 *
 * @param axiosInstance {AxiosInstance} Axios实例
 */
const interceptors = (axiosInstance: AxiosInstance) => {
    if (!axiosInstance) throw new Error('axiosInstance is required');

    // 请求请求拦截器
    if (!axiosInstance.__requestInterceptorAdded) {
        axiosInstance.interceptors.request.use(
            (req) => {
                return req;
            },
            (err) => {
                // 打印错误信息
                console.log('请求拦截器 <==> 错误信息:{}', err);
                // 继续请求
                return Promise.reject(err);
            }
        );
        // 标记请求拦截器已添加
        axiosInstance.__requestInterceptorAdded = true;
    }

    // 请求响应拦截器
    if (!axiosInstance.__responseInterceptorAdded) {
        axiosInstance.interceptors.response.use(
            (req) => {
                return req;
            },
            (err) => {
                // 打印错误信息
                console.log('响应拦截器 <==> 错误信息:{}', err);
                // 返回结果
                return Promise.reject(err);
            }
        );
        // 标记响应拦截器已添加
        axiosInstance.__responseInterceptorAdded = true;
    }
};

/**
 * 项目中自定义的请求函数（二次封装），并导出
 * 
 * @author Karl
 *
 * @param url {string} 请求地址
 * @param param {any} 请求参数
 * @param method {Method} 请求方式
 * @param returnPromise {boolean} 是否返回Promise
 * @param cb {Function} 回调函数
 * @returns Promise 或 void
 */
export const request = (url: string, param?: any, method?: Method, returnPromise?: boolean, cb?: Function): Promise<any> | void => {
    // 发送请求并返回Promise函数
    return send({
        baseUrl: BASE_URL, // 请求地址前缀
        url: url, // 请求地址
        param: param, // 请求参数
        method: method, // 请求方式
        returnPromise: returnPromise, // 是否返回Promise
        errorResponse: errorResponse, // 自定义错误信息处理函数（可选）
        callback(data) { // 回调函数（可选）
            cb && cb(data); // 如果回调函数存在，则执行回调函数
        },
        interceptors: interceptors // Axios自定义请求拦截器和响应拦截器（可选）
    });
};

```

#### 2.2、使用自己项目安装的Axios实例

ps：此示例展示的是 - 如何使用自定义的Axios实例

```ts
// 导入Axios实例与其类型声明
import axios, { Method } from 'axios';
// 导入send函数，用于发送请求
import { send } from 'karl-tools';

// 设置请求的地址前缀
const BASE_URL = 'xxxxxx';

// 创建自定义Axios实例
const requestAxios = axios.create({
    // 提示：这里你可以设置baseUrl、url、param、method等参数
    // 但是，send函数中：baseUrl、url 为必填参数，它们会自动填充到Axios的实例配置对象中，所以不推荐在这里设置它们，而是通过send函数的参数传入
    // 如果你在这里设置了baseUrl、url，那么send函数中会覆盖通过参数传入的baseUrl、url的值，具体可以查看send函数的源码
    // 其他的参数：param、method也是如此，所以不推荐在这里设置它们，而是通过send函数的参数传入
    // 所以，我推荐在这里设置一些全局的参数，如：headers、timeout等
    headers: {
        'Content-Type': 'application/json' // 设置请求头
    },
    timeout: 60 * 1000 // 请求超时时间，一分钟
});

/**
 * 项目中自定义的请求函数（二次封装），并导出
 *
 * @author Karl
 *
 * @param url {string} 请求地址
 * @param param {any} 请求参数
 * @param method {Method} 请求方式
 * @param returnPromise {boolean} 是否返回Promise
 * @param cb {Function} 回调函数
 * @returns Promise 或 void
 */
export const request = (url: string, param?: any, method?: Method, returnPromise?: boolean, cb?: Function): Promise<any> | void => {
    // 发送请求并返回Promise函数
    return send({
        baseUrl: BASE_URL, // 请求地址前缀
        url: url, // 请求地址
        param: param, // 请求参数
        method: method, // 请求方式
        returnPromise: returnPromise, // 是否返回Promise
        callback(data) {
            // 回调函数（可选）
            cb && cb(data); // 如果回调函数存在，则执行回调函数
        },
        axiosInstance: requestAxios // 使用自定义的Axios实例
    });
};

```

#### 2.3、封装文件上传函数

ps：此示例展示的是 - 如何封装文件上传函数并发送请求

```ts
// 导入Axios实例与其类型声明
import axios, { AxiosProgressEvent, Method } from 'axios';
// 导入send函数，用于发送请求
import { send } from 'karl-tools';

// 设置请求的地址前缀
const BASE_URL = 'xxxxxx';
// 文件上传文件对象的key
const FILE_KEY = 'xxxxxx';

// 创建文件上传的Axios实例
const fileAxios = axios.create({
    // 提示：这里你可以设置baseUrl、url、param、method等参数
    // 但是，send函数中：baseUrl、url 为必填参数，它们会自动填充到Axios的实例配置对象中，所以不推荐在这里设置它们，而是通过send函数的参数传入
    // 如果你在这里设置了baseUrl、url，那么send函数中会覆盖通过参数传入的baseUrl、url的值，具体可以查看send函数的源码
    // 其他的参数：param、method也是如此，所以不推荐在这里设置它们，而是通过send函数的参数传入
    // 所以，我推荐在这里设置一些全局的参数，如：headers、timeout等
    headers: {
        'Content-Type': 'multipart/form-data' // 设置请求头
    },
    timeout: 60 * 1000 // 请求超时时间，一分钟
});

/**
 * 文件上传请求函数
 *
 * @author Karl
 *
 * @param url {string} 请求地址
 * @param file {File} 文件对象
 * @param param {any} 请求参数
 * @param method {Method} 请求方法
 * @param progress {Function} 上传进度回调函数
 *
 * @returns Promise 或 void
 */
export const uploadFile = (
    url: string,
    file: File,
    param?: any,
    method?: Method,
    progress?: ((progressEvent: AxiosProgressEvent) => void) | undefined
) => {
    // 创建一个FormData对象
    let formdata = new FormData();
    // 将文件对象添加到FormData中
    formdata.append(FILE_KEY, file);
    // 如果有请求参数，则将请求参数添加到FormData中
    if (param) {
        for (let key in param) {
            formdata.append(key, param[key]);
        }
    }
    // 文件上传进度回调函数，怎么设置看你自己，也可以在这里创建axios实例时设置
    fileAxios.defaults.onUploadProgress = progress || (() => {});
    // 发送请求并返回Promise函数
    return send({
        baseUrl: BASE_URL,
        url: url,
        param: formdata,
        method: method,
        returnPromise: true,
        axiosInstance: fileAxios
    });
};

```

### 3、事件处理器

ps：主要用于处理项目中的事件，例如：`登录过期/未授权`，`路由跳转到登录页面并弹出提示` 等

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

## 贡献者

<div align="center">

<a href="https://github.com/karl1901/karl-tools/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=karl1901/karl-tools" />
</a>

</div>
