<template>
  <input v-model="input" @keyup.enter="addTask" placeholder="新增待辦事項" />
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    addTask() {
      if (this.input) {
        this.$emit("addTask", this.input);
        this.input = "";
      }
    },
  },
};
</script>
