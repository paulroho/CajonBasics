<template>
  <book :data="CajonBasicsStructure"></book>
</template>

<script>
import Book from "./components/Book.vue";
import CajonBasicsStructure from "./assets/data/cajon-basics.structure";

export default {
  name: "App",
  components: {
    Book,
  },
  data() {
    return {
      CajonBasicsStructure,
    };
  },
};
</script>

<style>
@import "./assets/styles/styles.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #87a6c6;
  padding: 0.5rem;
}
</style>
