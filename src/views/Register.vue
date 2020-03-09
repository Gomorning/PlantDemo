<template>
  <div>
    <form>
      <fieldset>
        <legend>注册</legend>
        <p><label>用户名:</label><input type="text"
                 v-model="username" /></p>
        <p><label>密码:</label><input type="password"
                 v-model="password" /></p>
        <a href=""
           v-on:click="toLogin">已有账号?去登录吧</a>
        <p><input type="button"
                 v-on:click="register"
                 value="注册" /></p>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    toLogin () {
      this.$router.push({ path: '/login' })
    },
    register () {
      if (!this.username || !this.password) {
        alert('用户名或密码不能为空')
      } else {
        this.$axios.post('api/user/addUser', {
          username: this.username,
          password: this.password
        }).then((res) => {
          console.log(res.data)
          this.$router.push({ path: '/login' })
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
form {
  width: 40%;
  margin: 0 auto;

  a {
    font-size: 13px;
    color: #f59;
  }
  label {
    padding: 5px;
  }
  input[type="text"],
  input[type="password"] {
    width: 200px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #eee;
    outline: none;
    text-indent: 1em;
  }
  input:focus {
    background: white;
  }
  input[type="button"] {
    width: 100px;
    height: 40px;
    background: #42b983;
    color: white;
    border: none;
    cursor: pointer;
  }
  legend {
    font-size: 20px;
    color: #f59;
  }
}
</style>
