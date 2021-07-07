<template>
  <div>
    <TopNavBar/>
    
    <Scroll class="subpage">
      <DetailBaseInfo :goods='goods'></DetailBaseInfo>
    </Scroll>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-goods-action-button type="danger" text="加入购物车" @click="onClickButton" class="joincart" />
    </van-goods-action>
  </div>
</template>

<script>
import TopNavBar from '../../components/content/TopNavBar.vue'
import DetailBaseInfo from './childCompos/DetailBaseInfo.vue'
import { getDetail,Goods } from "../../api/request";

export default {
  name: "Detail",
  components: {
    [TopNavBar.name]: TopNavBar,
    [DetailBaseInfo.name]: DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      goods:{}
    };
  },
  computed:{
    relGoods: function(){
      let result = this.goods
      result.iid = this.iid
      return result
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailGoods(this.iid);
    // console.log(this.iid);
    // console.log(this.goods);
  },

  mounted() {},

  methods: {
    getDetailGoods(id) {
      getDetail(id).then(res => {
        // console.log(res);
        //错误写法
        // console.log(data);
        // this.goods.columns = data.result.columns;
        // this.goods.title = data.result.itemInfo.desc;
        // this.goods.nowprice = data.result.itemInfo.lowNowPrice;
        // this.goods.price = data.result.itemInfo.price;
        // this.goods.picurl = data.result.itemInfo.topImages;
        // console.log(this.detailGoods);
        // console.log(this.detailGoods.picurl[0]);

        // 封装写法
        const data = res.result;
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // this.goods = {
        //   columns: data.result.columns,
        //   title: data.result.itemInfo.desc,
        //   nowprice: data.result.itemInfo.lowNowPrice,
        //   price: data.result.itemInfo.price,
        //   picurl: data.result.itemInfo.topImages
        // }
        // console.log(this.goods);
      });
    },

    onClickIcon() {
      this.$toast("点击图标");
    },
    onClickButton() {
      this.$store.commit('addToCart',this.relGoods)
      this.$toast("加入购物车成功");
    }
  }
};
</script>

<style lang="scss" scoped>
.subpage {
  // background-color: pink;
  bottom: 50px;
  top: 44px;
}
.joincart {
  line-height: 50px;
}
</style>