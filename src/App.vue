<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">首页</router-link> |
      <router-link to="/plantManage">我的植物</router-link>|
      <router-link to="/User">用户中心</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  border: 1px solid black;
  padding-top: 10px;
  padding-bottom: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
