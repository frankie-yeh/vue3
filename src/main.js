import { createApp } from "vue";
import App from "./App.vue"; // 確保路徑正確
import router from "./router"; // 確保 router 檔案存在
import store from "@/store/TodoContext"; // 確保 store 檔案存在

const app = createApp(App);
app.use(router); // 確保 router 正確掛載
app.use(store); // 確保 store 正確掛載
app.mount("#app");
