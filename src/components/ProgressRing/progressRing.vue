<template>
  <div class="wrapper">
    <canvas id="canvas" :width="width + 'px'" :height="height + 'px'"> </canvas>
  </div>
</template>

<script>
import ProgressRing from "./progressRing.js";
export default {
  name: "progressRing",
  data() {
    return {
      current: 0,
      t: null,
      canvas: null,
      step: 10
    };
  },
  props: {
    width: {
      type: Number,
      default: 375
    },
    height: {
      type: Number,
      default: 200
    },
    lineWidth: {
      type: Number,
      default: 5
    },
    complete: {
      type: Boolean,
      default: false
    }
  },
  methods: {},
  watch: {
    current(newVal) {
      this.$emit("change", parseInt(newVal));
    },
    complete(newVal) {
      if (newVal) {
        window.clearInterval(this.t);
        this.canvas.drawChart(100);
        this.current = 100;
      }
    }
  },
  mounted() {
    this.canvas = new ProgressRing({
      selector: "#canvas",
      lineWidth: this.lineWidth
    });
    this.current = 1;
    this.canvas.drawChart(this.current);
    this.t = window.setInterval(() => {
      if (this.current < 99) {
        this.current += this.step;
        this.canvas.drawChart(this.current);
        this.step =
          this.step /
          [0.8, 0.9, 1, 1.11, 1.12, 1.13, 1.14, 1.15, 2, 3, 4][
            parseInt(Math.random() * 10)
          ];
      } else {
        window.clearInterval(this.t);
      }
    }, 3000);
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
  }
}
</style>
