<template>
  <div class="goods">
    <GoodsListItem1 v-for="item in goods" :goods-item="item" :key='item.iid'/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem';

  export default {
    name: "GoodsList1",
    components:{
      GoodsListItem1:GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
  };
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
