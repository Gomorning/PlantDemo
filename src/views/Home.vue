<template>
  <div id="home">
    <!--搜索框-->
    <input class="search"
           type="text">
    <!--导航栏-->
    <nav class="nav">
      <router-link to="/sort">植物分类</router-link> |
      <router-link to="/tools">工具介绍</router-link> |
      <router-link to="/square">花友广场</router-link> |
      <router-link to="/shop">推荐店铺</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="less" scope>
#home {
  width: 90%;
  border: 1px solid #2c3e50;
  margin: 0 auto;
}
.search {
  width: 300px;
  height: 40px;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid gray;
  text-indent: 2em;
}

.nav {
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
