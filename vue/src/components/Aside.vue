<template>
  <div>
    <el-menu :default-openeds="['1', '3']" style="height: 100%" router>
      <el-menu-item index="/home">
        <template slot="title"><i class="el-icon-s-home"></i>主页</template>
      </el-menu-item>

      <el-menu-item index="/Options">
        <template slot="title"><i class="el-icon-setting"></i>Options</template>
      </el-menu-item>

      <el-menu-item index="/SentiArgs">
        <template slot="title"><i class="el-icon-setting"></i>SentiArgs</template>
      </el-menu-item>

      <el-menu-item index="/file">
        <template slot="title"><i class="el-icon-files"></i>File</template>
      </el-menu-item>

      <el-menu-item index="/spider">
        <template slot="title"><i class="el-icon-s-data"></i>Spider</template>
      </el-menu-item>

      <el-menu-item index="/visualization">
        <template slot="title"><i class="el-icon-pie-chart"></i>数据可视化</template>
      </el-menu-item>

      <el-menu-item index="/issues">
        <template slot="title"><i class="el-icon-data-line"></i>版本问题分析</template>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script>
export default {
  name: "Aside"
}
</script>

<style scoped>

</style>