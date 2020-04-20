import Vue from 'vue'
import App from './App.vue'
import pcScrollText from "pc_scrolltext"
import "pc_scrolltext/lib/pc_scrolltext.css"

Vue.config.productionTip = false
Vue.use(pcScrollText)

new Vue({
    render: h => h(App),
}).$mount('#app')
