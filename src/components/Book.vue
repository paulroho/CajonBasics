<template>
  <div class="book">
    <h1>{{ data.title }}</h1>
    <p>{{ data.pages.length }} pages</p>
    <page
      v-for="page in data.pages"
      :key="page.number"
      v-bind="page"
    ></page>
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