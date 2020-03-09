<template>
  <div>
    <form action="">
      id:<input type="text"
             name="id"
             v-model="id"><br>
      name:<input type="text"
             name="name"
             v-model="name"><br>
      age:<input type="text"
             name="age"
             v-model="age"><br>
      <a href="javascript:;"
         v-on:click="addUser">提交</a>
    </form>
    <hr>
    <ul>
      <h2>列表</h2>

      <li v-for="(user,index) in users"
          v-bind:key="index">
        {{user}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello this is a test',
      id: '',
      name: '',
      age: '',
      users: []
    }
  },
  beforeCreate () {
    this.$axios.post('api/user/queryAll', {
    }).then((res) => {
      this.users = res.data // 把返回的数据赋给数组
      console.log('成功')
    }).catch((err) => {
      console.log(err)
    })
  },
  methods: {
    addUser () {
      console.log('add...')
      const id = this.id
      const name = this.name
      const age = this.age
      this.$axios.post('api/user/addUser', {
        id: id,
        name: name,
        age: parseInt(age)
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
