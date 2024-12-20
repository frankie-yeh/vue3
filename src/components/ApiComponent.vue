<template>
  <div class="container">
    <div class="api-container">
      <h2 class="heading">API Call Example</h2>

      <!-- 錯誤訊息顯示 -->
      <p v-if="error" class="error-text">
        {{ error }}
      </p>

      <!-- 列出 API 資料 -->
      <ul v-else class="unordered-list">
        <li v-for="item in data" :key="item.id" class="list-item">
          <h3 class="item-title">{{ item.title }}</h3>
          <p class="item-body">{{ item.body }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "ApiComponent",
  setup() {
    const data = ref([]); // 用來存 API 資料
    const error = ref(null); // 錯誤訊息

    // 獲取 API 資料的函式
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        data.value = response.data;
      } catch (err) {
        error.value = "Error fetching data: " + err.message;
        console.error("Error fetching data:", err);
      }
    };

    // 組件掛載時呼叫 API
    onMounted(() => {
      fetchData();
    });

    return { data, error };
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #f7fafc;
}

.heading {
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 20px;
  color: #2b6cb0;
}

.error-text {
  color: #e53e3e;
  text-align: center;
}

.unordered-list {
  list-style: none;
  padding: 0;
}

.list-item {
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item-title {
  font-size: 1.25rem;
  color: #2d3748;
}

.item-body {
  margin-top: 8px;
  color: #4a5568;
}
</style>
