<script setup>
import { provideTodoContext } from "@/store/TodoContext";

// 在組件初始化時提供上下文
provideTodoContext();
</script>

<template>
  <router-view />
</template>
