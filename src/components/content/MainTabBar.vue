<template>
  <div class="tab-bar">
      <TabBarItem path="/home">
      <template #item-icon><img src="../../assets/img/tabbar/home.svg" alt=""></template>
      <template #item-icon-active><img src="../../assets/img/tabbar/home_active.svg" alt=""></template>
      <template #item-text><div>首页</div></template>
    </TabBarItem>
    <TabBarItem path="/category">
      <template #item-icon><img src="../../assets/img/tabbar/category.svg" alt=""></template>
      <template #item-icon-active><img src="../../assets/img/tabbar/category_active.svg" alt=""></template>
      <template #item-text><div>分类</div></template>
    </TabBarItem>
    <TabBarItem path="/cart">
      <template #item-icon><img src="../../assets/img/tabbar/shopcart.svg" alt=""></template>
      <template #item-icon-active><img src="../../assets/img/tabbar/shopcart_active.svg" alt=""></template>
      <template #item-text><div>购物车</div></template>
    </TabBarItem>
    <TabBarItem path="/profile">
      <template #item-icon><img src="../../assets/img/tabbar/profile.svg" alt=""></template>
      <template #item-icon-active><img src="../../assets/img/tabbar/profile_active.svg" alt=""></template>
      <template #item-text><div>我的</div></template>
    </TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "../common//tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",

  components: {
    [TabBarItem.name]: TabBarItem
  },

};
</script>

<style lang="scss" scoped>
.tab-bar{
    width: 100%;
    display: flex;
    left: 0;
    bottom: 0;
    height: 54px;
    position: fixed;
    justify-content: space-around;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 3px rgba(100, 100, 100, 0.2);
}
</style>