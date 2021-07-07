<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#d4237a'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path)
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
};
</script>

<style scoped>
  .tab-bar-item {
    text-align: center;
    height: 49px;
    font-size: 13px;
    margin-top: 5px;
    vertical-align: middle;
    
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
  }
</style>
