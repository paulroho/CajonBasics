<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Book :data="CajonBasicsStructure"></Book>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Book from "./components/Book.vue";
import CajonBasicsStructure from './assets/data/cajon-basics.structure'

export default {
  name: "App",
  components: {
    HelloWorld,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
