<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/css/base.css';
html,body,#app{
  color: #333;
  width: 100%;
  height: 100%;
  touch-action: none;
}
.subpage{
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
.page{
  width: 100%;
  position: absolute;
  top: 44px;
  bottom: 54px;
  left: 0;
  overflow: hidden;
  // background-color: black;
}
</style>
