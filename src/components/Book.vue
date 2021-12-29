<template>
  <div class="book">
    <book-title :text="data.title"></book-title>
    <page v-for="page in data.pages" :key="page.number" v-bind="page"></page>
  </div>
</template>

<script>
import Page from "./Page.vue";
import BookTitle from "./BookTitle.vue";

export default {
  name: "book",
  components: { BookTitle, Page },
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