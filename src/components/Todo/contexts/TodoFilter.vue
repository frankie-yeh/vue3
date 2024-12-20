<template>
  <div>
    <button
      v-for="option in options"
      :key="option"
      @click="$emit('setFilter', option)"
      :class="{ active: filter === option }"
    >
      {{ option }}
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
  props: {
    filter: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      options: ["全部", "尚未完成", "已完成"],
    };
  },
};
</script>

<style scoped>
.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
