# karl的工具库

> 介绍：个人开源npm工具库，觉得好用可以点个start  
>
> 地址：[npm](https://www.npmjs.com/package/karl-tools)  
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



### 2、工具组件

#### 组件使用方法

1、全局导入

main.ts 中

```js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 引入 karlTools 依赖库
import karlTools from 'karl-tools';
// 全局使用 karlTools 依赖库
app.use(karlTools);
```

2、按需导入

页面 Vue 文件中

```js
// 引入 ktCountTo 组件
import { ktCountTo } from 'karl-tools';
```

3、在页面上使用

```html
<kt-countTo :startValue="0" :endValue="132979" :duration="1200"></kt-countTo>
```

或

```html
<ktCountTo :startValue="0" :endValue="132979" :duration="1200"></ktCountTo>
```

4、效果图

![动画.gif](http://karl-blog.oss-cn-shenzhen.aliyuncs.com/aurora/articles/2c5cf5bf52a5988c47d49a3e54a50e5e.gif)

#### ktCountTo - vue 数字滚动组件

参数：

startValue：`起始值`，默认：0  
endValue：`结束值`，默认：2023  
duration：`动画时间（毫秒）`，默认：3000  
separator：`分隔符`，默认：,  
prefix：`前缀字符串`，默认：''  
suffix：`后缀字符串`，默认：''  

ps：源码可自行查看，转载需标明出处！  