import {createApp} from 'vue'
import App from './App.vue'
import router from "@/routes";
import store from "@/store";


//main.js는 애플리케이션의 설정, 플러그인, 라이브러리, 구조 등을 파악할 수 있는 청사진

createApp(App).use(router).use(store).mount('#app')
