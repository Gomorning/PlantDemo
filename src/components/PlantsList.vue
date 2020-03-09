<template>
  <div id="plantList">
    <h5>植物分类 [标签导航]</h5>
    <div id="sorts">
      <span v-for="(sort,index) in sorts"
            v-bind:key="index"
            v-on:click="showPlants(sort.sort_name,sort.sort_id)">{{sort.sort_name}}
      </span>
    </div>
    <h4>植物分类[{{currSort}}]</h4>
    <div id="plants">
      <ul>
        <li v-for="(plant,index) in plants"
            v-bind:key=index>
          <a class="list">
            <img :src="absolutePath+plant.plant_img"
                 alt="">
            <p>{{plant.plant_name}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      sorts: [],
      plants: '',
      currSort: '',
      absolutePath: '/plantPics'
    }
  },
  created () {
    this.$axios.post('api/plant/querySorts', {
    }).then((res) => {
      this.sorts = res.data // 把返回的数据赋给数组
    }).catch((err) => {
      console.log(err)
    })
    this.showPlants('草本植物', '001')
  },
  methods: {
    showPlants (name, id) {
      this.currSort = name
      this.$axios.post('api/plant/queryPlantsBySort', {
        id: id
      }).then((res) => {
        this.plants = res.data
      }).catch((err) => {
        console.log(err)
      })
    },
    showSorts () {
      this.$axios.post('api/plant/querySorts', {
      }).then((res) => {
        this.sorts = res.data // 把返回的数据赋给数组
        console.log(this.sorts)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less">
img {
  width: 100px;
}

#plantList {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid black;
  box-sizing: border-box;
}

#sorts {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  border: 1px solid black;
  padding: 30px;
  span {
    border-radius: 10px;
    transition: background 0.5s;
    display: inline-block;
    padding: 6px;
    margin-right: 10px;
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
    border: 1px solid black;
  }
  span:hover {
    background-color: rgba(37, 118, 124);
    color: white;
  }
}

#plants {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 0;

    li {
      display: inline-block;
      width: 20%;
      margin-top: 20px;
      border-radius: 10px;
      border: 1px solid black;

      a {
        width: 100%;
        height: 0px;
        padding-bottom: 100%;
        position: relative;
        display: inline-block;
        text-decoration: none;
        color: #2c3e50;
        font-size: 14px;
      }

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 20px;
      }
    }
  }
}
</style>
