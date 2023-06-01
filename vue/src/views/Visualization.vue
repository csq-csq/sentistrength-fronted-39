<template>
  <div>
    <div id="ChartA" :style="{width: '100%', height: '1000px'}" />

    <el-divider></el-divider>

    <button @click="fetchData">Get Data</button>
    <el-table :data="tableData" stripe>
      <el-table-column
          v-for="{ prop, label } in colConfigs"
          :key="prop"
          :prop="prop"
          :label="label">
      </el-table-column>
    </el-table>

    <div id="ChartB" style="width: 600px;height: 400px;"></div>
  </div>
</template>

<script>
import request from "@/utils/request";


export default {
  name: "Visualization",
  data() {
    // this.colConfigs = [
    //   { prop: 'comment_id', label: '评论id' },
    //   { prop: 'content', label: '内容' },
    //   { prop: 'issue_id', label: '问题id' },
    //   { prop: 'neg', label: 'neg' },
    //   { prop: 'pos', label: 'pos' },
    //   { prop: 'scale', label: 'scale' },
    //   { prop: 'send_date', label: '发送日期' },
    //   { prop: 'trinary', label: 'trinary' },
    //   { prop: 'upload_date', label: '上传日期' },
    //   { prop: 'user_id', label: '用户id' }
    // ]
    return {
      chart: null,
      tableData: [],
      colConfigs : [
        { prop: 'comment_id', label: '评论id' },
        { prop: 'content', label: '内容' },
        { prop: 'issue_id', label: '问题id' },
        { prop: 'neg', label: 'neg' },
        { prop: 'pos', label: 'pos' },
        { prop: 'scale', label: 'scale' },
        { prop: 'send_date', label: '发送日期' },
        { prop: 'trinary', label: 'trinary' },
        { prop: 'upload_date', label: '上传日期' },
        { prop: 'user_id', label: '用户id' }
      ]
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    async fetchData() {
      const ChartB = this.$echarts.init(document.getElementById('ChartB'))
      await request
          .get('/getCSV')
          .then(successResponse => {
            if(successResponse.code==200){
              this.tableData=successResponse.result
            }else{
              console.log(successResponse.message)
            }
          })
          .catch(failResponse => {
            console.log(failResponse.message)
          })
    },
    createChartOption(data) {
      // convert data to ECharts option here
      // this is just an example, you need to adjust it to fit your real data structure and visualization requirement
      return {
        xAxis: {
          type: 'category',
          data: data.map(item => item.date),
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          data: data.map(item => item.value),
          type: 'bar',
        }],
      }
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      const ChartA = this.$echarts.init(document.getElementById('ChartA'));
      ChartA.setOption({
        //官网实例代码，如下图
        title: {
          text: 'Rainfall vs Evaporation',
          subtext: 'Fake Data'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Rainfall', 'Evaporation']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Rainfall',
            type: 'bar',
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
          {
            name: 'Evaporation',
            type: 'bar',
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
            ],
            markPoint: {
              data: [
                { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>