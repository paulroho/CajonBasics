<template>
  <div class="page">
    <p class="numbering">Seite {{ number }}</p>
    <h2>{{ title }}</h2>

    <sample
      v-for="sample in samples"
      :key="sample.name"
      v-bind="sample"
    ></sample>
  </div>
</template>

<script>
import Sample from "./Sample.vue";

export default {
  name: "Page",
  components: { Sample },
  props: {
    number: Number,
    title: String,
    samples: Array,
  },
};
</script>

<style scoped>
div.page {
  border: 1px solid gray;
  border-radius: 0.5rem;
  margin: 1rem auto 1rem auto;
  background-color: white;
  padding: 1rem;
  max-width: 24rem;
}
p.numbering {
  text-align: left;
  margin: 0;
}
h2 {
  text-align: left;
}
</style>