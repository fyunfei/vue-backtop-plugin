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
    background:{
      type:String,
      default: '#009688'
    },
    visibleHeight:{
      type:Number,
      default: 500
    },
    speed:{
      type:Number,
      default: 100
    }
  },
  data() {
    return {
      backTopVisible: false,
      nowTime: null // 保存当前动画回调执行的时间
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.judgeScrollTop();
      window.addEventListener("scroll", this.judgeScrollTop, false);
    });
  },
  methods: {
    /**
     * @description 判断滚动条的高度控制回到顶部按钮的显示隐藏
     */
    judgeScrollTop() {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      this.backTopVisible = scrollTop > this.visibleHeight;
      if(this.backTopVisible){
        this.$refs['back-con'].style = `width:${this.width}px;height:${this.height}px;background:${this.background}`
        this.$refs['rocket'].style = `font-size:${this.width*2/3}px`
      }
    },
    /**
     * @description 获取当前滚动高度进行动画处理
     * @param {number} timestamp 表示开始执行回调的时刻
     */
    getScrollTop(timestamp) {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      document.body.scrollTop = document.documentElement.scrollTop =
        scrollTop-this.speed
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
  .icon-huojian {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
  }
}
</style>
