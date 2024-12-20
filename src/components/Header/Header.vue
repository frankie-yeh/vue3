<template>
  <div>
    <!-- 判斷是否為桌面版，切換不同的 Header -->
    <LaptopHeader v-if="isDesktop" />
    <MobileHeader v-else />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import LaptopHeader from "./LaptopHeader.vue"; // 引入桌面版 Header
import MobileHeader from "./MobileHeader.vue"; // 引入行動版 Header

export default {
  name: "Header-item",
  components: {
    LaptopHeader,
    MobileHeader,
  },
  setup() {
    const isDesktop = ref(false); // 用於判斷螢幕寬度是否大於 832px

    // 處理視窗尺寸變化
    const updateScreenSize = () => {
      isDesktop.value = window.innerWidth >= 832;
    };

    // 在組件掛載時監聽視窗變化事件
    onMounted(() => {
      updateScreenSize(); // 初始化螢幕寬度
      window.addEventListener("resize", updateScreenSize);
    });

    // 在組件卸載時移除事件監聽
    onUnmounted(() => {
      window.removeEventListener("resize", updateScreenSize);
    });

    return { isDesktop };
  },
};
</script>

<style scoped>
/* 如果需要額外樣式可以在這裡補充 */
</style>
