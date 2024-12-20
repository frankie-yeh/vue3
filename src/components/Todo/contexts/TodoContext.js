import { reactive, computed, watchEffect } from "vue";

// 建立全域的 state
const todoState = reactive({
  tasks: JSON.parse(localStorage.getItem("tasks")) || [], // 從 localStorage 初始化
  filter: "全部",
});

// 定義操作方法
const addTask = (text) => {
  if (text) {
    const newTask = { id: Date.now(), text, completed: false };
    todoState.tasks.push(newTask);
  }
};

const toggleComplete = (id) => {
  const task = todoState.tasks.find((task) => task.id === id);
  if (task) {
    task.completed = !task.completed;
  }
};

const deleteTask = (id) => {
  todoState.tasks = todoState.tasks.filter((task) => task.id !== id);
};

const setFilter = (filter) => {
  todoState.filter = filter;
};

const filteredTasks = computed(() => {
  switch (todoState.filter) {
    case "尚未完成":
      return todoState.tasks.filter((task) => !task.completed);
    case "已完成":
      return todoState.tasks.filter((task) => task.completed);
    default:
      return todoState.tasks;
  }
});

// 自動同步到 localStorage
watchEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(todoState.tasks));
});

// 導出操作方法和 state
export const useTodoContext = () => ({
  todoState,
  addTask,
  toggleComplete,
  deleteTask,
  setFilter,
  filteredTasks,
});
