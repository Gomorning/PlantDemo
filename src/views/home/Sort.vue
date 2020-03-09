<template>
  <div id="sort">
    <h2>植物分类</h2>
    <plants-list></plants-list>
  </div>
</template>

<script>
import PlantsList from '@/components/PlantsList.vue'
export default {
  components: {
    'plants-list': PlantsList
  }
}
</script>

<style lang="less" scoped>
#sort {
  width: 100%;
}
</style>
