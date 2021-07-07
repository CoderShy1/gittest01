<template>
<!-- 滚动容器视图, 容器的大小让外部调用时设置 -->
  <div class="scroll-wrap" ref="scroll">
    <!-- 滚动内容视图 -->
    <div class="scroll-content" :style="{width:width,backgroundColor: contentBg}">
       <slot/>
    </div>
  </div>
</template>

<script>
import IScroll from './iscroll-probe'
export default {
  props: {
    // x轴是否可以滚动
    scrollX: {
      type: Boolean,
      default: false
    },
    // 当x轴可以滚动时，x轴可滚动的宽度，绑定给滚动容器视图的css样式控制容器宽度
    width: {
      type: String,
      default: '100%'
    },
    // y轴是否可以滚动
    scrollY: {
      type: Boolean,
      default: true
    },
    contentBg: {
      type: String,
      default: '#fff'
    },
    onScroll: Function
  },
  mounted(){
    // 创建滚动视图
    const scroll = new IScroll(this.$refs.scroll, {
      mouseWheel: true,
      tap: true,
      click: true,
      scrollX: this.scrollX,
      scrollY: this.scrollY,
      probeType: this.onScroll ? 3 : 0
    });

    // 触摸前刷新滚动视图，防止数据因为异步加载而导致滚动视图识别不了高度。
    scroll.on('beforeScrollStart', ()=>{
      scroll.refresh();
    });

    scroll.on('scroll', ()=>{
      this.onScroll(scroll.y);
    })
    
  }
}
</script>

<style lang="scss" scoped>
.scroll-wrap{
  overflow: hidden;
}
// .scroll-content{
//   background: #fff;
// }
</style>>
