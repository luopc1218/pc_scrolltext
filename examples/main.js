import Vue from 'vue'
import App from './App.vue'
import ScrollText from "pc_scrolltext"
import "pc_scrolltext/lib/pc_scrolltext.css"

Vue.config.productionTip = false
Vue.use(ScrollText)

new Vue({
    render: h => h(App),
}).$mount('#app')
