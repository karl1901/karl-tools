<div align="center">
   <a href="https://github.com/karl1901/karl-tools"><img src="https://karl-blog.oss-cn-shenzhen.aliyuncs.com/karl-tools/logo.png" /></a><br>
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
    - [2.1、使用工具库的Axios实例](#21使用工具库的axios实例)
    - [2.2、使用自己项目安装的Axios实例](#22使用自己项目安装的axios实例)
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

[更新日志](https://github.com/karl1901/karl-tools/CHANGELOG.md)

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
```

3、效果

![Snipaste_20231010_153251.png](http://karl-blog.oss-cn-shenzhen.aliyuncs.com/aurora/articles/70eca9c11769935aa6e081be2b4ec2bf.png)  

#### 函数列表

| 函数              | 名称                               | 说明                                                                                                   |
| ----------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| formatDate        | 格式化日期时间                     | 例如：2023-10-09 12:00:00、2023年10月09日 12:00:00...                                                  |
| formatCommas      | 格式化数字                         | 例如：10,000,000、10,000.00...                                                                         |
| openChooseFile    | 打开文件选择器                     | 支持单选、多选                                                                                         |
| formatFileSize    | 格式化文件大小                     | 例如：100KB、130MB...                                                                                  |
| copyText          | 复制文本内容                       | 支持控制台打印复制结果                                                                                 |
| searchKeywordInfo | 关键字着色                         | 常用于搜索结果字符串标色                                                                               |
| searchKeywordList | 根据关键字查找集合中符合条件的数据 | 常用于查找集合中包含条件的所有内容，支持嵌套结构                                                       |
| searchTypeList    | 集合信息比对匹配                   | 常用于获取两集合中含有的相同内容                                                                       |
| sortList          | 集合排序                           | 常用于集合排序，例如：商品集合中根据商品价格排序，支持升序、降序                                       |
| saveLocalInfo     | 保存信息到本地                     | 常用于保存Token、其他信息，支持配置信息过期时间                                                        |
| loadLocalInfo     | 加载本地保存的信息                 | 常用于加载Token、本地保存的信息                                                                        |
| checkLocalInfo    | 检验本地保存的信息是否过期         | 检验本地保存的Token、其他信息是否已过期                                                                |
| maskStr           | 字符串掩盖格式化                   | 例如：136\*\*\*6343、房东\*\*\*猫、游客k1\*\*ws...                                                     |
| concurRequest     | 并发请求工具函数                   | 可控制并发数，不受浏览器限制，但是受服务器限制，如果服务器限制了并发数，那么这个函数就无法实现并发请求 |

### 2、Axios - Ajax请求封装函数工具

> 工具使用到的库以及版本如下  
> 1、@types/qs: `6.9.15`  
> 2、qs: `6.12.1`  
> 3、axios: `1.7.2`  

函数名称：`send`  

函数参数：  

> baseUrl：`请求地址前缀`  
> url：`请求地址`  
> param：`请求参数`  
> method：`请求方式`  
> options：`可选配置对象，包括：是否返回Promise对象、自定义错误信息函数、回调函数、自定义axios实例、自定义qs参数格式化配置`  

返回值：`Promise对象或回调函数`  

使用示例：

#### 2.1、使用工具库的Axios实例

```ts
// Axios内容导入请求方法类型，需要下载Axios
// 我采用的是Axios的Method来限定请求的方式，当然，你也可以自定义Method
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
 * 自定义错误信息处理函数（如果是回调请求结果，会返回自定义的错误信息）
 * 
 * @description 返回一个对象，自定义请求发生错误时的返回信息
 *
 * @param err 请求发生错误的信息
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
    param?: any,
    method?: Method,
    returnPromise?: boolean,
    cb?: Function
) => {
    // 返回请求结果
    return send(base, url, param, method, returnPromise, {
        returnPromise: returnPromise,
        errorResponse: errorResponse,
        callback: cb
    });
};

// 使用工具库的Axios实例，自定义请求拦截器
Axios.interceptors.request.use(
    (req) => {
        return req;
    },
    (err) => {
        console.log('请求拦截器错误信息:{}', err);
        // 继续请求
        return Promise.reject(err);
    }
);

// 使用工具库的Axios实例，自定义响应拦截器
Axios.interceptors.response.use(
    (req) => {
        return req;
    },
    (err) => {
        console.log('响应拦截器错误信息:{}', err);
        // 返回结果
        return Promise.reject(err);
    }
);

```

#### 2.2、使用自己项目安装的Axios实例

```ts
// Axios内容导入请求方法类型，需要下载Axios
// 我采用的是Axios的Method来限定请求的方式，当然，你也可以自定义Method
import axios, { Method } from 'axios';
// 导入Ajax请求封装函数工具、Axios实例
import { send } from 'karl-tools';

// 项目请求地址（有的项目会有多个请求地址）
const ServerBaseUrl = {
    server: 'http://127.0.0.1:8080',
    baidu: 'https://api.baidu.com',
    aliyun: 'https://api.aliyun.com'
    otherApi: 'https://api.xxx.com'
};

type ServerBaseUrl = typeof ServerBaseUrl;

/**
 * 自定义错误信息处理函数（如果是回调请求结果，会返回自定义的错误信息）
 * 
 * @description 返回一个对象，自定义请求发生错误时的返回信息
 *
 * @param err 请求发生错误的信息
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
    param?: any,
    method?: Method,
    returnPromise?: boolean,
    cb?: Function
) => {
    // 返回请求结果
    return send(base, url, param, method, returnPromise, {
        returnPromise: returnPromise,
        errorResponse: errorResponse,
        callback: cb,
        axiosInstance: axios, // 使用自己项目安装的Axios实例
        qsOptions: {  // qs参数格式化配置
            allowDots: true, // 允许对象参数的点符号
            charset: 'utf-8', // 编码字符集
            // .... 其他配置
        }
    });
};

// 使用自己项目安装的的Axios实例，自定义请求拦截器
axios.interceptors.request.use(
    (req) => {
        return req;
    },
    (err) => {
        console.log('请求拦截器错误信息:{}', err);
        // 继续请求
        return Promise.reject(err);
    }
);

// 使用自己项目安装的Axios实例，自定义响应拦截器
axios.interceptors.response.use(
    (req) => {
        return req;
    },
    (err) => {
        console.log('响应拦截器错误信息:{}', err);
        // 返回结果
        return Promise.reject(err);
    }
);

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
