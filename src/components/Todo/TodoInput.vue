<template>
  <input
    type="text"
    placeholder="接下來要做什麼呢？"
    :value="input"
    @input="(e) => setInput(e.target.value)"
    @keydown.enter="handleKeyDown"
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoInput",
  props: {
    input: {
      type: String,
      required: true,
    },
    setInput: {
      type: Function,
      required: true,
    },
    addTask: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleKeyDown() {
      this.addTask(this.input);
      this.setInput(""); // 清空輸入框
    },
  },
});
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}
</style>
