<template>
  <div class="sample">
    <a :href="href">{{ name }}</a>
  </div>
</template>

<script>
function getFileName(number) {
  return `CajonBasics${number.toLocaleString("de-AT", {
    minimumIntegerDigits: 2,
  })}.mp3`;
}

export default {
  name: "Sample",
  props: {
    number: Number,
  },
  data() {
    return {
      name: `Audio ${this.number}`,
      href: this.sampleBaseUri + getFileName(this.number),
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