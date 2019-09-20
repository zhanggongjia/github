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
        <Button style="margin-left: 20px;">高级筛选</Button>
        <Button style="margin-left: 20px;">自定义表头</Button>
        <Input @keyup.enter.native="searchList" class="search" placeholder="请输入关键字搜索">
        <Icon type="ios-search" slot="suffix" @click="searchList" /></Input>
      </div>
      <Table class="CustomerTable" :columns="columns1" :data="data1"></Table>
      <div class="CustomerPage">
        <span>共 40 条</span>
        <Page :total="40" size="small" show-elevator show-sizer />
      </div>
    </div>
  </div>
</template>
<script>
import Newclient from "@/components/Newclient";
export default {
  components: { Newclient },
  data () {
    return {
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
  margin-top: 25px;
  float: right;
  margin-right: 100px;
}
.Customerlist .ivu-page {
  display: inline-block;
}
</style>