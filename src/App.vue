<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld />
</template>

<script>
//import DynamicHeading from "./components/DynamicHeading.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
/* Challenge: Refactor these styles into a CSS class and combine it with CSS modules */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
