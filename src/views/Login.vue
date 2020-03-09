<template>
  <div>
    <form>
      <fieldset>
        <legend>登录</legend>
        <p><label>用户名:</label><input type="text"
                 v-model="username" /></p>
        <p><label>密码:</label><input type="password"
                 v-model="password" /></p>
        <a href=""
           v-on:click="toRegister">没有账号?先注册一个</a>
        <p><input type="button"
                 v-on:click="login"
                 value="登录" /></p>
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
    toRegister () {
      this.$router.push({ path: '/register' })
    },
    login () {
      if (!this.username || !this.password) {
        alert('用户名或密码不能为空')
      } else {
        this.$axios.post('api/user/getUser', {
          username: this.username,
          password: this.password
        }).then((res) => {
          if (res.data.status === '-1' || res.data.status === '0') {
            console.log(res.data.msg)
          } else {
            console.log(res.data)
            this.$store.commit('set_token', res.data.token)
            // this.$route.query.redirect 指的是你进入登录页前，点击的那个页面
            if (this.$route.query.redirect) {
              const redirectPath = this.$route.query.redirect
              this.$router.push({ path: redirectPath })
            } else {
              this.$router.push({ name: 'Home' })
            }
          }
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
