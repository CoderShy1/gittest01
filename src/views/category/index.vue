<template>
    <div>
        <NavBar #center>
            分类商品
        </NavBar>
        <MainTabBar/>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import MainTabBar from '../../components/content/MainTabBar.vue'
export default {
    name: 'Home',
    components:{
        [MainTabBar.name]: MainTabBar,
        [NavBar.name]: NavBar,
    },
    
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>