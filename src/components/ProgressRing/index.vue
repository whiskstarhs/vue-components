<template>
  <div class="progressRing">
    <Ring
      :width="width"
      :height="height"
      :lineWidth="5"
      :complete="complete"
      v-if="showCanvas"
      @change="changeCurrent"
    ></Ring>
    <div class="content">
      <p class="title">报告生成进度</p>
      <p class="value">
        <span>{{ current }}%</span>
      </p>
    </div>
  </div>
</template>

<script>
import Ring from "./progressRing.vue";
export default {
  name: "index",
  data() {
    return {
      width: 0,
      height: 200,
      showCanvas: false,
      current: 0
    };
  },
  props: {
    complete: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeCurrent(val) {
      this.current = val;
    }
  },
  components: {
    Ring
  },
  mounted() {
    this.width = document.querySelector(".progressRing").offsetWidth;
    this.height =
      document.querySelector(".progressRing").offsetHeight > 200
        ? document.querySelector(".progressRing").offsetHeight
        : 200;
    this.showCanvas = true;
  }
};
</script>

<style scoped lang="scss">
.progressRing {
  height: 100%;
  position: relative;
  .content {
    position: absolute;
    width: 100%;
    top: calc(50% - 28px);
    p {
      text-align: center;
      &.title {
        color: #999999;
        font-size: 13px;
      }
      &.value {
        font-size: 42px;
        color: #ff7640;
      }
    }
  }
}
</style>
