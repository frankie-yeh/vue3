<template>
  <div>
    <h1>待辦事項</h1>
    <!-- 新增任務 -->
    <input
      v-model="newTask"
      @keypress.enter="addTask"
      placeholder="新增待辦事項"
    />
    <button @click="addTask">新增</button>

    <!-- 篩選按鈕 -->
    <div>
      <button
        v-for="filterOption in filterOptions"
        :key="filterOption"
        @click="setFilter(filterOption)"
      >
        {{ filterOption }}
      </button>
    </div>

    <!-- 任務列表 -->
    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <span
          :style="{ textDecoration: task.completed ? 'line-through' : 'none' }"
          @click="toggleComplete(task.id)"
        >
          {{ task.text }}
        </span>
        <button @click="deleteTask(task.id)">刪除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTodoStore } from "@/store/TodoStore";

export default {
  name: "TodoApp",
  setup() {
    const todoStore = useTodoStore();
    const newTask = ref("");

    // 新增任務
    const addTask = () => {
      if (newTask.value.trim()) {
        todoStore.addTask(newTask.value.trim());
        newTask.value = "";
      }
    };

    // 暴露給模板使用
    return {
      newTask,
      addTask,
      filteredTasks: todoStore.filteredTasks,
      filterOptions: ["全部", "尚未完成", "已完成"],
      setFilter: todoStore.setFilter,
      toggleComplete: todoStore.toggleComplete,
      deleteTask: todoStore.deleteTask,
    };
  },
};
</script>
