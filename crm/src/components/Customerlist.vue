<template>
  <div class="Customerlist">
    <header>
      <Button type="primary">添加任务</Button>
      <Newclient></Newclient>
    </header>
    <div class="conent">
      <div class="top">
        <span>销售进度: </span>
        <Select v-model="CustomerlistData.city" placeholder="请选择销售进度" style="width: 180px">
          <Option value="day">日</Option>
          <Option value="week">周</Option>
          <Option value="mounth">月</Option>
          <Option value="mounth">月</Option>
          <Option value="mounth">月</Option>
          <Option value="mounth">月</Option>
          <Option value="mounth">月</Option>
          <Option value="mounth">月</Option>
        </Select>
        <Button style="margin-left: 20px;" @click="modal1 = true">高级筛选</Button>
        <Button style="margin-left: 20px;">自定义表头</Button>
        <Input @keyup.enter.native="searchList" class="search" placeholder="请输入关键字搜索">
        <Icon type="ios-search" slot="suffix" @click="searchList" /></Input>
      </div>
      <Table class="CustomerTable" :columns="columns1" :data="data1"></Table>
      <div class="CustomerPage">
        <div>
          <span>共 40 条</span>
          <Page :total="40" size="small" show-elevator show-sizer />
        </div>
      </div>
    </div>
    <Modal v-model="modal1" title="高级筛选" width="700" @on-ok="ok" class="selcectform" @on-cancel="cancel">
      <Form ref="formValidate" :model="formValidate" :label-width="108" class="clearfix">
        <div class="title">基本信息</div>
        <FormItem label="创建人" prop="name" width="50%">
          <Input v-model="formValidate.name" placeholder="输入任务名" width="50%"></Input>
        </FormItem>
        <FormItem label="销售进度" prop="city">
          <Select v-model="formValidate.city" placeholder="Select your city">
            <Option value="day">日</Option>
            <Option value="week">周</Option>
            <Option value="mounth">月</Option>
          </Select>
        </FormItem>
        <FormItem label="所属微信" prop="name">
          <Input v-model="formValidate.name" placeholder="输入任务名"></Input>
        </FormItem>

        <FormItem label="跟进人" prop="name">
          <Input v-model="formValidate.name" placeholder="输入任务名"></Input>
        </FormItem>
        <FormItem label="电话结果" prop="city">
          <Select v-model="formValidate.city" placeholder="Select your city">
            <Option value="day">日</Option>
            <Option value="week">周</Option>
            <Option value="mounth">月</Option>
          </Select>
        </FormItem>
        <FormItem label="电话标签" prop="city">
          <Select v-model="formValidate.city" placeholder="Select your city">
            <Option value="day">日</Option>
            <Option value="week">周</Option>
            <Option value="mounth">月</Option>
          </Select>
        </FormItem>

        <FormItem label="创建时间" prop="date">
          <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
        </FormItem>
        <FormItem label="联系时间" prop="date">
          <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
        </FormItem>

        <FormItem label="数据来源" prop="name">
          <Input v-model="formValidate.name" placeholder="输入任务名"></Input>
        </FormItem>
        <FormItem label="分配状态" prop="city">
          <Select v-model="formValidate.city" placeholder="Select your city">
            <Option value="day">日</Option>
            <Option value="week">周</Option>
            <Option value="mounth">月</Option>
          </Select>
        </FormItem>
        <FormItem label="沟通状态" prop="city">
          <Select v-model="formValidate.city" placeholder="Select your city">
            <Option value="day">日</Option>
            <Option value="week">周</Option>
            <Option value="mounth">月</Option>
          </Select>
        </FormItem>
        <FormItem label="短信发送状态" prop="city">
          <Select v-model="formValidate.city" placeholder="Select your city">
            <Option value="day">日</Option>
            <Option value="week">周</Option>
            <Option value="mounth">月</Option>
          </Select>
        </FormItem>
        <FormItem label="号码归属地" prop="city">
          <Select v-model="formValidate.city" placeholder="Select your city">
            <Option value="day">日</Option>
            <Option value="week">周</Option>
            <Option value="mounth">月</Option>
          </Select>
        </FormItem>
        <FormItem label="通话时长" prop="name">
          <Input v-model="formValidate.name" placeholder="输入任务名"></Input>
        </FormItem>
        <FormItem label="邮件发送状态" prop="city">
          <Select v-model="formValidate.city" placeholder="Select your city">
            <Option value="day">日</Option>
            <Option value="week">周</Option>
            <Option value="mounth">月</Option>
          </Select>
        </FormItem>
        <FormItem label="挂机短信发送状态" prop="city">
          <Select v-model="formValidate.city" placeholder="Select your city">
            <Option value="day">日</Option>
            <Option value="week">周</Option>
            <Option value="mounth">月</Option>
          </Select>
        </FormItem>
        <FormItem label="有效外呼次数" prop="city">
          <Select v-model="formValidate.city" placeholder="Select your city" style="width: 108px;">
            <Option value="day">日</Option>
            <Option value="week">周</Option>
            <Option value="mounth">月</Option>
          </Select>
          <Input v-model="formValidate.name" placeholder="输入任务名" style="width: 108px;"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
import Newclient from "@/components/Newclient";
export default {
  components: { Newclient },
  data () {
    return {
      modal1: false,
      formValidate: {
        name: '',
        city: 'day',
        gender: 'male',
        date: '',
        time: '',
      },
      CustomerlistData: {
        city: ''
      },

      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: '15064359885',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: '15064359885',
          date: '2016-10-01'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: '15064359885',
          date: '2016-10-01'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: '15064359885',
          date: '2016-10-01'
        }
        ,
        {
          name: 'Jim Green',
          age: 24,
          address: '15064359885',
          date: '2016-10-01'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: '15064359885',
          date: '2016-10-01'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: '15064359885',
          date: '2016-10-01'
        }
        ,
        {
          name: 'Jim Green',
          age: 24,
          address: '15064359885',
          date: '2016-10-01'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: '15064359885',
          date: '2016-10-01'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: '15064359885',
          date: '2016-10-01'
        }
      ]
    }
  },
  methods: {
    searchList () {
      console.log('searchList')
    },
    ok () {
      this.$Message.info('Clicked ok');
    },
    cancel () {
      this.$Message.info('Clicked cancel');
    }
  }
}
</script>

<style scoped>
header {
  margin-top: 5px;
}
.CustomerTable {
  margin-top: 25px;
}
.Customerlist {
  padding: 0 30px;
}
.Customerlist .top {
  width: 100%;
  margin-top: 20px;
}
.search {
  width: 260px;
  float: right;
  margin-right: 40px;
}
.CustomerPage {
  height: 50px;
  margin-top: 25px;
}
.CustomerPage > div {
  float: right;
  margin-right: 30px;
}
.CustomerPage .ivu-page {
  display: inline-block;
}
.selcectform .ivu-modal-body {
  padding: 0;
}
</style>
<style >
.selcectform .ivu-modal-body {
  padding: 0;
  padding-right: 15px;
}
.selcectform .title {
  line-height: 40px;
  padding-left: 20px;
}
.selcectform {
  width: 700px;
}
.selcectform .ivu-form-item {
  float: left;
  width: 50%;
  padding: 0 8px;
  margin-bottom: 18px;
}
.selcectform .ivu-form-item:last-child {
  width: 80%;
}
.selcectform .ivu-form .ivu-form-item-label {
  text-align: right;
}
</style>