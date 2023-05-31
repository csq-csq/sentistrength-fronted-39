<template>
  <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="100px"
      class="demo-dynamic">
    <el-form-item
        v-for="(date, index) in dynamicValidateForm.dates"
        :label="'日期' + index"
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
</template>

<script>
import request from "@/utils/request";
import { Loading } from 'element-ui';

export default {
  name: "Spider",
  data() {
    return {
      dynamicValidateForm: {
        dates: [{
          value: ''
        }],
      },
    };
  },
  methods: {
    submitForm(formName) {
    Loading.service({fullscreen:true})
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          request
              .post('/spider', {dates: this.dynamicValidateForm.dates})
              .then(Response => {
                this.loading=false
                if(Response.code==200){
                  alert('爬取成功！')
                }else{
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
    }
  }
}
</script>

<style scoped>

</style>