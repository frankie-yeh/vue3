<template>
  <div class="button-group" :style="{ marginTop: '1rem' }">
    <Button
      @click="setFilter('全部')"
      :colorScheme="filter === '全部' ? 'blue' : 'gray'"
      :variant="filter === '全部' ? 'solid' : 'outline'"
    >
      全部
    </Button>
    <Button
      @click="setFilter('尚未完成')"
      :colorScheme="filter === '尚未完成' ? 'blue' : 'gray'"
      :variant="filter === '尚未完成' ? 'solid' : 'outline'"
    >
      尚未完成
    </Button>
    <Button
      @click="setFilter('完成')"
      :colorScheme="filter === '完成' ? 'blue' : 'gray'"
      :variant="filter === '完成' ? 'solid' : 'outline'"
    >
      已完成
    </Button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Button } from "@chakra-ui/vue-next";

export default defineComponent({
  name: "TodoFilter",
  components: {
    Button,
  },
  props: {
    filter: {
      type: String,
      required: true,
    },
    setFilter: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style scoped>
.button-group {
  display: flex;
  gap: 1rem;
}
</style>
