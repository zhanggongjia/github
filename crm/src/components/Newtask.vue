<template>
  <Modal v-model="shownewtask" title="新建任务" @on-ok="ok" @on-cancel="cancel" className="newtask" :styles="{top: '80px'}">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="72">
      <FormItem label="" prop="name" className="newtask1" style="margin-left: -58px;">
        <Input v-model="formValidate.name" placeholder="输入任务名" style="width: 360px;"></Input>
      </FormItem>
      <div class="task">
        <FormItem label="任务周期" prop="city">
          <Select v-model="formValidate.city" placeholder="Select your city" style="width: 187px">
            <Option value="day">日</Option>
            <Option value="week">周</Option>
            <Option value="mounth">月</Option>
          </Select>
        </FormItem>
        <FormItem label="Date" prop="date">
          <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
        </FormItem>
        <FormItem label="人均数量" prop="name">
          <Input v-model="formValidate.name" placeholder="输入任务名" style="width: 187px"></Input>
        </FormItem>
      </div>
      <div class="task">
        <FormItem label="执行人员" prop="name">
          <Input v-model="formValidate.name" placeholder="输入任务名"></Input>
        </FormItem>
      </div>
      <div class="selectdata">
        <p>选择数据方式</p>
        <RadioGroup v-model="formValidate.gender" class="Radiodata">
          <Radio label="male">提供数据</Radio>
          <Radio label="female">不提供数据</Radio>
        </RadioGroup>
      </div>
      <Button type="primary" @click="handleSubmit('formValidate')" class="submit">提交</Button>
      <!-- <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button> -->
    </Form>
  </Modal>

</template>

<script>
export default {
  data () {
    return {
      shownewtask: false,
      value: '',
      formValidate: {
        name: '',
        city: 'day',
        gender: 'male',
        date: '',
        time: '',
      },
      ruleValidate: {
        name: [
          { required: true, message: '任务名不能为空', trigger: 'blur' }
        ],

        city: [
          { required: true, message: 'Please select the city', trigger: 'change' }
        ],
        gender: [
          { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        date: [
          { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
        ],
        time: [
          { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
        ],
      }
    }
  },
  methods: {
    ok () {
      this.$Message.info('Clicked ok');
    },
    cancel () {
      this.$Message.info('Clicked cancel');
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    }
  },
}
</script>

<style scoped>
.selectdata {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
}
.selectdata p {
  padding-bottom: 15px;
}
.submit {
  margin: 15px auto;
  display: block;
}
</style>
<style>
.newtask .task {
  width: 460px;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 5px;
  border: 1px solid #e1e1e1;
}
.newtask .ivu-form-item {
  margin-bottom: 18px;
}
.newtask .ivu-form-item-error-tip {
  padding-top: 3px;
}
.newtask .ivu-modal-footer {
  display: none;
}
</style>
