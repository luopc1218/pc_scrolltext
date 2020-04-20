# pc_scrolltextarea

一个可自动滚动的文本组件 for vue.js

## 安装插件
```
yarn add pc_scrolltext
npm install pc_scrolltext
```
## 引入插件
```
//main.js
import ScrollText from "pc_scrolltext"
import "pc_scrolltext/lib/pc_scrolltext.css"
Vue.use(ScrollText)
```

## 使用插件
```
//xxx.vue
//需要提供基本样式(高/宽)
//支持其他样式
<l-scrollText style="width:xxx;height:xxx">
(需要显示的内容)
</l-scrollText>
```
## 参数
```
speed:Number(10)//速度:越低越快
mouseenter:Boolean(true)//是否支持鼠标移入后暂停
```
