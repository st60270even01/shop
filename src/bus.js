import Vue from 'vue';

Vue.prototype.$bus = new Vue();

// 自定義名稱 'messsage:push'
// message: 傳入參數
// status: 樣式，預設值為 warning
// vm.$bus.$emit('messsage:push', message, status)