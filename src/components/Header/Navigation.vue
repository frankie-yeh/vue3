<template>
  <nav class="nav-bar">
    <!-- Logo -->
    <div class="logo">
      <router-link to="/">
        <img src="/assets/images/car-logo.png" alt="Logo" />
      </router-link>
    </div>

    <!-- Menu Items -->
    <div class="menu-items">
      <router-link to="/">
        <span class="menu-text" @mouseover="closeDropdown">回首頁</span>
      </router-link>

      <router-link to="/api">
        <span class="menu-text">抓 API</span>
      </router-link>

      <!-- Dropdown Menu -->
      <div
        class="dropdown"
        @mouseover="toggleDropdown(true)"
        @mouseleave="toggleDropdown(false)"
      >
        <span class="dropdown-title">
          待辦事項 {{ isDropdownOpen ? "▲" : "▼" }}
        </span>
        <div v-if="isDropdownOpen" class="dropdown-menu">
          <router-link to="/TodoList">
            <span class="dropdown-item">待辦事項1 ( Local-Storage )</span>
          </router-link>
          <router-link to="/TodoListRedux">
            <span class="dropdown-item">待辦事項2 ( Redux )</span>
          </router-link>
          <router-link to="/TodoApi">
            <span class="dropdown-item">待辦事項3 ( Hook API )</span>
          </router-link>
        </div>
      </div>

      <router-link to="/AboutUs">
        <span class="menu-text">自我介紹</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Navigation-item", // 符合 Vue 3 的 PascalCase 命名規則
  setup() {
    const isDropdownOpen = ref(false); // 控制下拉選單開啟狀態

    // 切換下拉選單狀態
    const toggleDropdown = (isOpen) => {
      isDropdownOpen.value = isOpen;
    };

    // 關閉下拉選單
    const closeDropdown = () => {
      isDropdownOpen.value = false;
    };

    return { isDropdownOpen, toggleDropdown, closeDropdown };
  },
};
</script>

<style scoped>
/* 樣式區域，CSS 僅作用於此組件 */

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #3182ce; /* Chakra UI: blue.500 */
  padding: 16px;
  color: white;
}

.logo img {
  max-height: 50px;
}

.menu-items {
  display: flex;
  align-items: center;
  gap: 24px;
}

.menu-text {
  font-weight: bold;
  cursor: pointer;
  transition: text-decoration 0.2s;
}

.menu-text:hover {
  text-decoration: underline;
}

.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown-title {
  font-weight: bold;
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #2b6cb0; /* Chakra UI: blue.600 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px;
  margin-top: 4px;
  z-index: 10;
}

.dropdown-item {
  padding: 8px;
  width: 100%;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: #2c5282; /* Chakra UI: blue.700 */
}
</style>
