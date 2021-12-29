<template>
  <p class="title">{{ text }}</p>
</template>

<script>
export default {
  name: "book-title",
  props: {
    text: String,
  },
};
</script>

<style scoped>
p {
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
}
</style>