import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    tasks: [], // 任務列表
    filter: "全部", // 過濾條件
  }),
  actions: {
    // 新增待辦事項
    addTask(taskText) {
      const newTask = { id: Date.now(), text: taskText, completed: false };
      this.tasks.push(newTask);
    },
    // 切換完成狀態
    toggleComplete(taskId) {
      const task = this.tasks.find((t) => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    // 刪除待辦事項
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((t) => t.id !== taskId);
    },
    // 設置過濾條件
    setFilter(newFilter) {
      this.filter = newFilter;
    },
  },
  getters: {
    // 過濾後的任務列表
    filteredTasks(state) {
      if (state.filter === "全部") return state.tasks;
      if (state.filter === "尚未完成")
        return state.tasks.filter((t) => !t.completed);
      if (state.filter === "已完成")
        return state.tasks.filter((t) => t.completed);
    },
  },
});
