<template>
  <li
    :class="['todo-item', { completed: task.completed }]"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <chakra-checkbox
      :is-checked="task.completed"
      @change="toggleComplete"
      size="lg"
      mr="2"
    />
    <chakra-text
      :as="task.completed ? 'del' : 'span'"
      flex="1"
      fontSize="lg"
      :color="task.completed ? 'gray.500' : 'gray.700'"
      cursor="pointer"
      @click="toggleComplete"
    >
      {{ task.text }}
    </chakra-text>
    <chakra-icon-button
      :icon="closeIcon"
      aria-label="Delete task"
      size="sm"
      colorScheme="red"
      variant="ghost"
      @click="deleteTask"
      _hover="{ backgroundColor: 'red.100' }"
    />
  </li>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  CkCheckbox as ChakraCheckbox,
  CkText as ChakraText,
  CkIconButton as ChakraIconButton,
  CkCloseIcon as CloseIcon,
} from "@chakra-ui/vue-next";

export default defineComponent({
  name: "TodoItem",
  components: {
    ChakraCheckbox,
    ChakraText,
    ChakraIconButton,
    CloseIcon,
  },
  props: {
    task: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          typeof value.text === "string" && typeof value.completed === "boolean"
        );
      },
    },
    toggleComplete: {
      type: Function,
      required: true,
    },
    deleteTask: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const hover = ref(false);
    return {
      hover,
      closeIcon: <CloseIcon />,
    };
  },
});
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  border: 1px solid;
  background-color: #fef8e6; /* 預設背景色 */
  transition: background-color 0.3s;
}
.todo-item:hover {
  background-color: #ffd7a1; /* 滑鼠懸停背景色 */
}
.todo-item.completed {
  background-color: #e2e8f0; /* 已完成背景色 */
  border-color: #cbd5e0; /* 已完成邊框顏色 */
}
</style>
