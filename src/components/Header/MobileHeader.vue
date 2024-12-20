<template>
  <div class="mobile-header" :class="{ open: isMenuOpen }">
    <!-- Header -->
    <div class="header-bar">
      <!-- Logo -->
      <router-link to="/">
        <img src="../assets/images/car-logo.png" alt="Logo" class="logo" />
      </router-link>

      <!-- Menu Toggle Button -->
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle Menu">
        <HamburgerIcon />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="mobile-menu">
        <router-link to="/" class="menu-item" @click="toggleMenu">
          回首頁
        </router-link>
        <router-link to="/api" class="menu-item" @click="toggleMenu">
          抓 API
        </router-link>

        <!-- Dropdown Menu -->
        <div class="dropdown">
          <button class="dropdown-toggle" @click="toggleDropdown">選項3</button>
          <ul v-if="isDropdownOpen" class="dropdown-menu">
            <li>
              <router-link
                to="/TodoList"
                class="dropdown-item"
                @click="toggleMenu"
              >
                待辦事項1 ( local-Storage )
              </router-link>
            </li>
            <li>
              <router-link
                to="/TodoListRedux"
                class="dropdown-item"
                @click="toggleMenu"
              >
                待辦事項2 ( Redux )
              </router-link>
            </li>
            <li>
              <router-link
                to="/TodoApi"
                class="dropdown-item"
                @click="toggleMenu"
              >
                待辦事項3 ( HookAPI )
              </router-link>
            </li>
          </ul>
        </div>

        <router-link to="/AboutUs" class="menu-item" @click="toggleMenu">
          自我介紹
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import HamburgerIcon from "@chakra-ui/icons";

export default {
  name: "MobileHeader",
  components: {
    HamburgerIcon,
  },
  setup() {
    const isMenuOpen = ref(false);
    const isDropdownOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    return { isMenuOpen, toggleMenu, isDropdownOpen, toggleDropdown };
  },
};
</script>

<style scoped>
.mobile-header {
  background-color: #3182ce; /* Chakra UI: blue.500 */
  color: white;
}

.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.logo {
  height: 50px;
}

.menu-toggle {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.mobile-menu {
  background-color: #2b6cb0; /* Chakra UI: blue.600 */
  padding: 16px;
}

.menu-item {
  display: block;
  padding: 8px 0;
  color: white;
  text-decoration: none;
}

.menu-item:hover {
  text-decoration: underline;
}

.dropdown {
  margin: 8px 0;
}

.dropdown-toggle {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

.dropdown-menu {
  background-color: #2c5282; /* Chakra UI: blue.700 */
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
}

.dropdown-item {
  padding: 8px;
  color: white;
  text-decoration: none;
}

.dropdown-item:hover {
  background-color: #2a4365; /* Chakra UI: hover effect */
}
</style>
