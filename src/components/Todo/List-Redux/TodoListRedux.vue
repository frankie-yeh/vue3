<template>
  <div
    class="todo-container"
    :style="{
      width: '90%',
      maxWidth: '650px',
      padding: '24px',
      background: '#e6dbc9',
      borderRadius: '10px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      margin: '2em auto',
      textAlign: 'center',
    }"
  >
    <h1 :style="{ fontSize: '24px', color: '#dbc191', marginBottom: '16px' }">
      Redux 待辦事項 (Vue3)
    </h1>
    <!-- 輸入框 -->
    <input
      v-model="input"
      @keypress.enter="addTask"
      placeholder="新增待辦事項"
      style="
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        margin-bottom: 16px;
      "
    />
    <!-- 任務列表 -->
    <ul>
      <li
        v-for="task in filteredTasks"
        :key="task.id"
        :style="{
          padding: '8px',
          background: '#fff',
          borderRadius: '4px',
          marginBottom: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }"
      >
        <span
          :style="{
            textDecoration: task.completed ? 'line-through' : 'none',
          }"
          @click="toggleComplete(task.id)"
        >
          {{ task.text }}
        </span>
        <button
          @click="deleteTask(task.id)"
          style="background: red; color: white; border: none; padding: 4px 8px"
        >
          刪除
        </button>
      </li>
    </ul>
    <!-- 過濾按鈕 -->
    <div style="margin-top: 16px">
      <button
        v-for="option in filterOptions"
        :key="option"
        @click="setFilter(option)"
        :style="{
          marginRight: '8px',
          background: filter === option ? '#dbc191' : '#fff',
          border: '1px solid #dbc191',
          padding: '4px 8px',
          cursor: 'pointer',
          borderRadius: '4px',
        }"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTodoStore } from "@/store/TodoStore";

export default {
  name: "TodoListRedux",
  setup() {
    const todoStore = useTodoStore();
    const input = ref("");

    // 添加新任務
    const addTask = () => {
      if (input.value.trim()) {
        todoStore.addTask(input.value.trim());
        input.value = "";
      }
    };

    // 切換完成狀態
    const toggleComplete = (taskId) => {
      todoStore.toggleComplete(taskId);
    };

    // 刪除任務
    const deleteTask = (taskId) => {
      todoStore.deleteTask(taskId);
    };

    // 設置過濾條件
    const setFilter = (newFilter) => {
      todoStore.setFilter(newFilter);
    };

    return {
      input,
      filteredTasks: todoStore.filteredTasks,
      filter: todoStore.filter,
      filterOptions: ["全部", "尚未完成", "已完成"],
      addTask,
      toggleComplete,
      deleteTask,
      setFilter,
    };
  },
};
</script>

<style scoped>
/* 可選：根據需要自定義樣式 */
</style>
