<template>
  <div v-show="backTopVisible" class="back-container" ref="back-con" @click="backToTop">
    <i class="iconfont icon-huojian" ref="rocket"></i>
  </div>
</template>

<script>
import "../css/iconfont.css";
export default {
  name: "BackToTop",
  props:{
    width:{
      type:Number,
      default: 60
    },
    height:{
      type:Number,
      default: 60
    },
  },
  data() {
    return {
      backTopVisible: false,
      nowTime: null // 保存当前动画回调执行的时间
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs['back-con'].style = `width:${this.width}px;height:${this.height}px`
      this.$refs['rocket'].style = `font-size:${this.width*2/3}px`
      this.judgeScrollTop();
      window.addEventListener("scroll", this.judgeScrollTop, false);
    });
  },
  methods: {
    judgeScrollTop() {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      this.backTopVisible = scrollTop > 500;
    },
    /**
     * @description 获取当前滚动高度进行动画处理
     * @param {number} timestamp 表示开始执行回调的时刻
     */
    getScrollTop(timestamp) {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      document.body.scrollTop = document.documentElement.scrollTop =
        scrollTop > 3000 ? scrollTop - 500 : scrollTop - 100;
      if (
        document.documentElement.scrollTop > 0 ||
        document.body.scrollTop > 0
      ) {
        window.requestAnimationFrame(this.getScrollTop);
      }
    },
    backToTop() {
      window.requestAnimationFrame(this.getScrollTop);
    }
  }
};
</script>

<style lang="scss" scoped>
.back-container {
  position: fixed;
  right: 30px;
  bottom: 30px;
  border-radius: 50%;
  background: rgba($color: #009688, $alpha: 0.6);
  .icon-huojian {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
  }
}
</style>
