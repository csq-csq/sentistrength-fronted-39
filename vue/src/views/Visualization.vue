<template>
  <div>
    <el-button @click="fetchImage" type="primary">Get Image</el-button>
    <image-gallery :image-urls="imageUrls" />

    <el-divider></el-divider>
    <el-button @click="fetchData" type="primary">Get Data</el-button>
    <el-table :data="tableData" stripe  height="400">
      <el-table-column
          v-for="{ prop, label } in colConfigs"
          :key="prop"
          :prop="prop"
          :label="label"
          :show-overflow-tooltip="true">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import request from "@/utils/request";
import ImageGallery from "@/components/ImageGallery";

export default {
  name: "Visualization",
  components:{
    ImageGallery,
  },
  data() {
    return {
      imageUrls: [],
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
  methods: {
    async fetchData() {
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
    async fetchImage() {
      await request
          .get('/getImage')
          .then(successResponse => {
            if(successResponse.code==200){
              this.imageUrls=successResponse.result
            }else{
              console.log(successResponse.message)
            }
          })
          .catch(failResponse => {
            console.log(failResponse.message)
          })
    },
  }
}
</script>

<style scoped>

</style>