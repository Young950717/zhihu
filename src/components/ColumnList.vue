<template>
  <ul>
    <li v-for="column in list"
        :key="column.id">
      <img :src="column.avatar"
           :alt="column.title">
      <h5>{{ column.title }}</h5>
      <p>{{ column.description }}</p>
      <a href="#">进入专栏</a>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
export interface ColumProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumProps[]>,
      required: true,
    },
  },
});
</script>
<style scoped>
</style>