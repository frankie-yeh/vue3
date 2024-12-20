<template>
  <div
    class="todo-list"
    style="
      width: 90%;
      max-width: 650px;
      padding: 1.5rem;
      background-color: #edf2f7;
      border-radius: 0.375rem;
      margin: 2em auto;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
    "
  >
    <h1 style="color: #319795; text-align: center; margin-bottom: 1rem">
      你忘記的事
    </h1>
    <div class="vstack" style="margin-bottom: 1rem">
      <input
        v-model="input"
        @keypress.enter="addTask(input)"
        placeholder="新增待辦事項"
        style="
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #319795;
          background-color: #fff;
          border-radius: 0.375rem;
        "
      />
      <button
        @click="addTask(input)"
        style="
          width: 100%;
          margin-top: 0.5rem;
          padding: 0.5rem;
          color: white;
          background-color: #319795;
          border: none;
          border-radius: 0.375rem;
        "
      >
        新增
      </button>
    </div>
    <ul style="list-style: none; padding: 0; margin-top: 1rem">
      <TodoItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @toggle-complete="toggleComplete(task.id)"
        @delete-task="deleteTask(task.id)"
      />
    </ul>
    <div class="stack" style="margin-top: 1rem; text-align: center">
      <TodoFilter :filter="filter" @set-filter="setFilter" />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from "vue";
import TodoItem from "./TodoItem.vue";
import TodoFilter from "./TodoFilter.vue";

export default {
  name: "TodoList",
  components: { TodoItem, TodoFilter },
  setup() {
    const tasks = ref([]);
    const input = ref("");
    const filter = ref("全部");

    // 初始化 localStorage
    onMounted(() => {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      if (storedTasks) {
        tasks.value = storedTasks;
      }
    });

    // 監聽 tasks 的變化，同步到 localStorage
    watch(tasks, (newTasks) => {
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    });

    // 添加任務
    const addTask = (text) => {
      if (text) {
        const newTask = {
          id: Date.now(),
          text,
          completed: false,
        };
        tasks.value.push(newTask);
        input.value = "";
      }
    };

    // 切換完成狀態
    const toggleComplete = (id) => {
      tasks.value = tasks.value.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    };

    // 刪除任務
    const deleteTask = (id) => {
      tasks.value = tasks.value.filter((task) => task.id !== id);
    };

    // 過濾任務
    const filteredTasks = computed(() =>
      filter.value === "全部"
        ? tasks.value
        : filter.value === "尚未完成"
        ? tasks.value.filter((task) => !task.completed)
        : tasks.value.filter((task) => task.completed)
    );

    // 設定過濾條件
    const setFilter = (newFilter) => {
      filter.value = newFilter;
    };

    return {
      tasks,
      input,
      filter,
      filteredTasks,
      addTask,
      toggleComplete,
      deleteTask,
      setFilter,
    };
  },
};
</script>

<style scoped>
.todo-list {
  font-family: Arial, sans-serif;
}
</style>
