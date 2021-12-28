<template>
  <div class="sample">
    <p>{{ title }}
      <span v-if="playalong">Playalong: </span>
      <a v-if="showSample" :href="href">{{ name }}</a>
    </p>
  </div>
</template>

<script>
function getFileName(number) {
  return `CajonBasics${number.toLocaleString("de-AT", {
    minimumIntegerDigits: 2,
  })}.mp3`;
}

function getHref(sampleBaseUri, number) {
  if (number !== undefined) {
    return sampleBaseUri + getFileName(number);
  }
}

export default {
  name: "Sample",
  props: {
    number: Number,
    title: String,
    playalong: Boolean,
  },
  data() {
    return {
      name: `Audio ${this.number}`,
      showSample: this.number !== undefined,
      href: getHref(this.sampleBaseUri, this.number),
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