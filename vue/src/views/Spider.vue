<template>
  <div>
    <el-main
        v-loading="loading1"
        element-loading-text="正在爬取"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)">
      <h1>第一步：爬取</h1>
      <br>
      <el-form
          :model="dynamicValidateForm"
          ref="dynamicValidateForm"
          label-width="100px"
          class="demo-dynamic">
        <el-form-item
            v-for="(date, index) in dynamicValidateForm.dates"
            :label="'版本' + (index+1)"
            :key="date.key"
            :prop="'dates.' + index + '.value'"
            :rules="{
        required: true, message: '域名不能为空', trigger: 'blur'
      }"
        >
          <!--      <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>-->
          <el-date-picker
              v-model="date.value"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
          </el-date-picker>
          <el-button @click.prevent="removeDomain(date)">删除</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
          <el-button @click="addDate">新增日期</el-button>
          <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>

    <el-main
        v-loading="loading2"
        element-loading-text="正在爬取"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)">
      <el-divider></el-divider>
      <h1>第二步：预处理</h1>
      <br>
      <el-button type="primary" @click="pretreatment">预处理</el-button>
    </el-main>

    <el-main
        v-loading="loading3"
        element-loading-text="正在爬取"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)">
      <el-divider></el-divider>
      <h1>第三步：分析</h1>
      <br>
      <el-button type="primary" @click="analysis">分析</el-button>
    </el-main>

  </div>
</template>

<script>
import request from "@/utils/request";


export default {
  name: "Spider",
  data() {
    return {
      dynamicValidateForm: {
        dates: [{
          value: ''
        }],
      },
      loading1:false,
      loading2:false,
      loading3:false,
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          this.loading1=true
          request
              .post('/spider', {dates: this.dynamicValidateForm.dates})
              .then(Response => {
                this.loading1=false
                if(Response.code==200){
                  alert('爬取成功！')
                }else{
                  console.log(Response.code)
                  alert('爬取失败！')
                }
              })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.dates.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.dates.splice(index, 1)
      }
    },
    addDate() {
      this.dynamicValidateForm.dates.push({
        value: '',
        key: Date.now()
      });
    },
    pretreatment(){
      alert('开始预处理！')
      this.loading2=true
      request
          .post('/pretreatment', "pretreatment")
          .then(Response => {
            this.loading2=false
            if(Response.code==200){
              alert('预处理成功！')
            }else{
              console.log(Response.code)
              alert('预处理失败！')
            }
          })
    },
    analysis(){
      alert('开始分析！')
      this.loading3=true
      request
          .post('/analysis', "analysis")
          .then(Response => {
            this.loading3=false
            if(Response.code==200){
              alert('分析成功！')
            }else{
              console.log(Response.code)
              alert('分析失败！')
            }
          })
    }
  }
}
</script>

<style scoped>

</style>