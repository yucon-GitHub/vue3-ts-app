import { createApp } from 'vue';
// 样式库
import "web-common-library/scss/main.scss";
import App from '@/App.vue';
import router from "@/router/index";


createApp(App).use(router).mount('#app');
