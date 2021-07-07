<template>
    <div>
        <NavBar #center>
            CoderShy
        </NavBar>
        <Scroll class="page">
            <HomeSwiper/>
            <!-- 轮播图 -->
            <FeatureView/>
            <!-- 本周流行 -->
            <GoodsList1 :goods='goods'></GoodsList1>
        </Scroll>
        <MainTabBar/>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import MainTabBar from '../../components/content/MainTabBar.vue'
import FeatureView from './childCompos/FeatureView.vue'
import HomeSwiper from './childCompos/HomeSwiper.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'

// import axios from 'axios'
import { getHomeGoods } from '../../api/request.js'
export default {
    name: 'Home',
    components:{
        [MainTabBar.name]: MainTabBar,
        [NavBar.name]: NavBar,
        [FeatureView.name]: FeatureView,
        [HomeSwiper.name]: HomeSwiper,
        [GoodsList.name]: GoodsList
    },
    
    data() {
        return {
            goods: []
        };
    },
    created() {
         this.getPopGoods()
        // axios.get('http://152.136.185.210:7878/api/m5/home/data',{
        //     params:{
        //         type:'pop',
        //         page:1
        //     }
        // }).then((data)=>{
        //     console.log(data);
        // })
    },
    
    mounted() {
        
    },

    methods: {
        getPopGoods(){
            getHomeGoods().then((data)=>{
                // console.log(data);
                this.goods = data.data.list.map(item=>({
                    iid:item.iid,
                    title:item.title,
                    price:item.price,
                    imgurl:item.showLarge.img,
                    cfav:item.cfav

                }))
                // console.log(this.goods);
            })
        }
    },
};
</script>

<style lang="scss" scoped>

</style>