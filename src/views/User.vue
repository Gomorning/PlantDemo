<template>
  <div>
    <h1>[用户中心] 待完成</h1>
    <input type="button"
           v-on:click="quit"
           value="退出">
  </div>
</template>

<script>
export default {
  data: function () {
    return {

    }
  },
  methods: {
    quit () {
      this.$store.commit('del_token') // 移除localstorage和vuex中的token
      this.$router.push({ path: '/home' }) // 退出跳转到主页
    }
  }
}
</script>
