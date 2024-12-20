<template>
  <div class="todo-container">
    <!-- 標題 -->
    <h1 class="todo-heading">Hooks API 待辦事項</h1>

    <!-- 輸入框 -->
    <TodoInput :input="input" @update:input="setInput" @add-task="addTask" />

    <!-- 待辦事項列表 -->
    <ul class="todo-list">
      <TodoItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @toggle-complete="toggleComplete"
        @delete-task="deleteTask"
      />
    </ul>

    <!-- 篩選按鈕 -->
    <TodoFilter :filter="state.filter" @set-filter="setFilter" />
  </div>
</template>

<script>
import { reactive, computed, onMounted, watch } from "vue";
import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";
import TodoFilter from "./TodoFilter.vue";

export default {
  name: "TodoListHooks",
  components: { TodoInput, TodoItem, TodoFilter },
  setup() {
    const state = reactive({
      tasks: [],
      filter: "全部", // 篩選條件：全部、尚未完成、已完成
    });

    const input = reactive({ text: "" });

    // 加載本地存儲的待辦事項
    onMounted(() => {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      if (storedTasks) {
        state.tasks = storedTasks;
      }
    });

    // 保存到本地存儲
    watch(
      () => state.tasks,
      (newTasks) => {
        localStorage.setItem("tasks", JSON.stringify(newTasks));
      },
      { deep: true }
    );

    // 新增任務
    const addTask = (text) => {
      if (text) {
        state.tasks.push({
          id: Date.now(),
          text,
          completed: false,
        });
        input.text = ""; // 清空輸入框
      }
    };

    // 切換完成狀態
    const toggleComplete = (id) => {
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    };

    // 刪除任務
    const deleteTask = (id) => {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    };

    // 設定篩選條件
    const setFilter = (filter) => {
      state.filter = filter;
    };

    // 篩選後的任務列表
    const filteredTasks = computed(() => {
      if (state.filter === "全部") return state.tasks;
      if (state.filter === "尚未完成")
        return state.tasks.filter((task) => !task.completed);
      if (state.filter === "已完成")
        return state.tasks.filter((task) => task.completed);
      return []; // 默認返回值
    });

    return {
      state,
      input,
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
  width: 90%;
  max-width: 650px;
  padding: 30px;
  background-color: #e6dbc9;
  border-radius: 10px;
  margin: 2em auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Courier New", Courier, monospace;
  color: #000;
  text-align: center;
}

.todo-heading {
  font-size: 24px;
  color: #dbc191;
  margin-bottom: 20px;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
