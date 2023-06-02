<template>
  <div>
    <h2>Echart5.3.4/5.4.0/5.4.1版本数据分析可视化</h2>
    <br>
    <div class="imgBox1">
      <img class="item1" src="../assets/1.png" alt="1" v-viewer>
      <img class="item1" src="../assets/2.png" alt="2" v-viewer>
      <img class="item1" src="../assets/3.png" alt="3" v-viewer>
      <img class="item1" src="../assets/7.png" alt="7" v-viewer>
    </div>
    <el-divider></el-divider>
    <h2>Echart5.3.4/5.4.0/5.4.1版本功能问题可视化</h2>
    <br>
    <div>
      <img src="../assets/bubble.png" alt="bubble" v-viewer>
    </div>
    <br>
    <div class="imgBox2">
      <img class="item2" src="../assets/Freq_534.png" alt="534" v-viewer>
      <img class="item2" src="../assets/Freq_540.png" alt="540" v-viewer>
      <img class="item2" src="../assets/Freq_541.png" alt="541" v-viewer>

    </div>
  </div>
</template>

<script>
export default {
  name: "Issues"
}
</script>

<style scoped>
.imgBox1 {
  display: flex;
  justify-content: space-between;
}
.imgBox2 {
  display: flex;
  justify-content: space-between;
}
img{
  width: 100%;
}
.item1{
  width: 25%;
}
.item2{
  width: 33%;
}
</style>