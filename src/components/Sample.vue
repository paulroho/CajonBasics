<template>
  <div class="sample">
    <a :href="href">{{ name }}</a>
  </div>
</template>

<script>
export default {
  name: "Sample",
  props: {
    name: String,
    extension: String,
  },
  data() {
    return {
      href: this.sampleBaseUri + this.name + "." + this.extension,
    };
  },
};
</script>

<style scoped>
div.sample {
  font-size: 1.25rem;
  margin: 0.5rem;
}
</style>