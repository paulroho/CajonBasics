<template>
  <div class="page">
    Page #{{ number }} {{ samples.length }} samples
    <sample
      v-for="sample in samples"
      :key="sample.name"
      v-bind="sample"
    ></sample>
  </div>
</template>

<script>
import Sample from './Sample.vue'

export default {
  name: "Page",
  components: { Sample },
  props: {
    number: Number,
    samples: Array,
  },
};
</script>