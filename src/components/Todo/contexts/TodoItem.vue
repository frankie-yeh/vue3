<template>
  <li>
    <input
      type="checkbox"
      :checked="task.completed"
      @change="$emit('toggleComplete')"
    />
    <span :class="{ completed: task.completed }">{{ task.text }}</span>
    <button @click="$emit('deleteTask')">刪除</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
