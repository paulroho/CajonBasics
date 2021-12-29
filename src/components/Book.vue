<template>
  <div class="book">
    <book-title :text="data.title"></book-title>
    <div class="subinfo">
      <p>{{ data.author }}</p>
      <p>{{ data.publisher }}</p>
      <p>{{ data.ISBN }}</p>
    </div>
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
div.subinfo p {
  margin: 0;
}
</style>