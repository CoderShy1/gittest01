<template>
  <div>
    <NavBar #center>购物车</NavBar>
    <Scroll>
      <div v-for="(item,index) in list" :key="item.iid">
        <div id="shop-item">
          <div class="item-selector">
            <CheckButton :isChecked="item.checked" @click.native="checkClick(item,index)"/>
            
          </div>
          <div class="item-img">
            <img :src="item.picurl[0]" alt="商品图片" />
          </div>
          <div class="item-info">
            <div class="item-title">{{item.title}}</div>
            <div class="item-desc">商品描述: {{item.desc}}</div>
            <div class="info-bottom">
              <div class="item-price left">￥{{item.realPrice}}</div>
              <div class="item-count right">x{{item.count}}</div>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
    <MainTabBar />
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters } from "vuex";
import NavBar from "../../components/common/navbar/NavBar.vue";
import MainTabBar from "../../components/content/MainTabBar.vue";
import CheckButton from "./childrens/CheckButton.vue"
export default {
  name: "Home",
  components: {
    [MainTabBar.name]: MainTabBar,
    [NavBar.name]: NavBar,
    [CheckButton.name]: CheckButton
  },

  data() {
    return {};
  },
  computed: {
    ...mapState({
      // list: "cartList"
    }),
    ...mapGetters({
      list: "cartList"
    })
  },
  mounted() {
    // console.log(this.list);
    // this.changeChecked();
  },

  methods: {
    ...mapMutations({
      changeChecked:'changeChecked'
    }),
    checkClick(item,index){
      this.changeChecked(index);
      console.log(index);
      console.log(123);
      console.log(item.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>