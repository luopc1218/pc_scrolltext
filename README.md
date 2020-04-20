# pc_scrolltext

一个可自动滚动的文本组件 for vue.js

 ![image](https://github.com/luopc1218/pc_scrolltext/blob/master/images/test.gif)

## 安装插件
```
yarn add pc_scrolltext
npm install pc_scrolltext --save
```
## 引入插件
```
//main.js
import pcScrollText from "pc_scrolltext"
import "pc_scrolltext/lib/pc_scrolltext.css"
Vue.use(pcScrollText)
```

## 使用插件
```
//xxx.vue
//需要提供基本样式(高/宽)
//支持其他样式
<pc-scrollText  style="width:xxx;height:xxx">
(需要显示的内容)
</pc-scrollText >
```
## 参数
```
speed:Number(10)//速度:越低越快
mouseenter:Boolean(true)//是否支持鼠标移入后暂停
```
