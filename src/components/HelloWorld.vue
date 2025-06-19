<template>
  <div class="hello">Hello</div>
  <h1>currentCount: {{ currentCount }}</h1>
  <h2>incrementAmount: {{ incrementAmount }}</h2>
  <h3>changeAmount: {{ changeAmount }}</h3>
</template>

<script setup>
import { useCounterMethod } from "../features/useCounter";
import { ref } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const { currentCount, incrementCount } = useCounterMethod();
    let changeAmount = ref(2);
    return {
      changeAmount,
      currentCount,
      incrementCount,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
