<template>
  <div class="feature">
    
      <img :src="picurl" alt="">
    
  </div>
</template>

<script>
import picurl  from '../../../assets/img/home/recommend_bg.jpg';
export default {
  name: "FeatureView",
  data() {
      return {
          picurl,
      };
  },
  mounted() {
    //   console.log(picurl);
  },
  
};
</script>

<style scoped>
  .feature img {
    width: 100%;
  }
</style>
