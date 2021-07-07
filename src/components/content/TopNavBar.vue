<template>
  <div>
    <NavBar class="navbox">
      <template #left>
        <div class="back" @click="backClick">
          <img src="../../assets/img/common/back.svg" alt />
        </div>
      </template>
      <template #center>
        <div class="title">我叫CoderShy</div>
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "../common/navbar/NavBar.vue";
export default {
  name: "TopNavBar",

  components: {
    [NavBar.name]: NavBar
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
  .navbox{
    background-color: #fff;
  }
   .title {
    font-size: 20px;
    color: #000;
  }

  .back img {
    margin-top: 12px;
  }




</style>