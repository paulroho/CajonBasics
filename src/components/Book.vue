<template>
  <div class="book">
    <h1>{{ data.title }}</h1>
    <page v-for="page in data.pages" :key="page.number" v-bind="page"></page>
  </div>
</template>

<script>
import Page from "./Page.vue";
export default {
  name: "book",
  components: { Page },
  props: {
    data: Object,
  },
};
</script>

<style scoped>
div.book {
  background-color: lightyellow;
}
</style>