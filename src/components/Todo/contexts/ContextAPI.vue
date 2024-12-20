<template>
  <div class="todo-container">
    <h1>你忘記的事</h1>
    <!-- 輸入框 -->
    <TodoInput @addTask="addTask" />
    <!-- 任務列表 -->
    <ul>
      <TodoItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @toggleComplete="toggleComplete(task.id)"
        @deleteTask="deleteTask(task.id)"
      />
    </ul>
    <!-- 篩選器 -->
    <TodoFilter :filter="todoState.filter" @setFilter="setFilter" />
  </div>
</template>

<script>
import { useTodoContext } from "@/store/TodoContext";
import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";
import TodoFilter from "./TodoFilter.vue";

export default {
  name: "ContextAPI",
  setup() {
    const {
      todoState,
      addTask,
      toggleComplete,
      deleteTask,
      setFilter,
      filteredTasks,
    } = useTodoContext();

    return {
      todoState,
      addTask,
      toggleComplete,
      deleteTask,
      setFilter,
      filteredTasks,
    };
  },
};
</script>

<style scoped>
.todo-container {
  padding: 20px;
  max-width: 600px;
  margin: auto;
  background: #f5f5f5;
  border-radius: 10px;
}
</style>
