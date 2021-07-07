import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  getters: {
    cartList(state){
      return state.cartList
    }
  },
  mutations: {
    addToCart(state,payload){
      let oldProduct = null;
      for(let item of state.cartList){
        if(item.iid === payload.iid){
          oldProduct = item;
        }
      }
      if(oldProduct){
        oldProduct.count ++;
      }else{
        payload.count = 1;
        payload.checked = true;
        state.cartList.push(payload);
      }
    },
    changeChecked(state,payload){ 
      // state.cartList[payload].checked = !state.cartList[payload].checked;
      let obj = state.cartList[payload];
      obj.checked = !obj.checked;
      state.cartList.splice(payload,1,obj)
      
      
    }
  },
  actions: {
    
  },
  modules: {
  }
})
