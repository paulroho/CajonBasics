<template>
  <div class="sample">
    Sample
    <a :href="href">{{ name }}</a>
  </div>
</template>

<script>
export default {
  name: "Sample",
  props: {
    name: String,
  },
  data() {
    return {
      href: this.sampleBaseUri + this.name,
    };
  },
};
</script>