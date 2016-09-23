<template>
    <router-view></router-view>
</template>
<script>
export default {
  components: {}
}
</script>

<style lang="less">
html, body {
  height: 100%;
  width: 100%;
  font-size: 62.5%;
  overflow: hidden;
}
body {
  font-size: 1.4rem;
  background-color: #fbf9fe;
}
.views {
  height: 100%
}
.header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
.weui_tab_bd {
  padding-bottom: 0 !important;
}
</style>
