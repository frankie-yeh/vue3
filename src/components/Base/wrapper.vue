<template>
  <div>
    <!-- 頁首 Header -->
    <Header />

    <!-- 主內容區域 -->
    <div class="container">
      <slot />
    </div>

    <!-- 頁尾 Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../Header/Header.vue"; // 導入 Header 組件
import Footer from "../../footer.vue"; // 導入 Footer 組件

export default {
  name: "wrapper",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.container {
  max-width: 100%;
  padding: 0;
  margin: 0;
}
</style>
