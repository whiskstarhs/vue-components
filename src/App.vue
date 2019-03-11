<template>
  <div id="app">
    <progress-ring :complete="complete" />
  </div>
</template>

<script>
import ProgressRing from "./components/ProgressRing";

export default {
  name: "app",
  components: {
    ProgressRing
  },
  data() {
    return {
      complete: false
    };
  },
  mounted() {
    /*window.setTimeout(() => {
      this.complete = true;
    }, 5000);*/
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 500px;
  margin: 0 auto;
}
</style>
