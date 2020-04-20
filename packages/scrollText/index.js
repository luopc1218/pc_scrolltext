// packages/textarea/index.js

// 导入组件，组件必须声明 name
import ScrollText from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
ScrollText.install = function (Vue) {
    Vue.component(ScrollText.name, ScrollText)
}

export default ScrollText