<template>
  <Modal v-model="showNowdoing" title="进行中" @on-ok="ok" @on-cancel="cancel" className="newtask" :styles="{top: '80px'}">
    <Form ref="Nowdoingdata" :model="Nowdoingdata" :label-width="68">
      <div class="title">
        <p>2019-06-18任务<span> (过期)</span></p>
        <p class="source">数据源： 线索再分配</p>
        <Button size="small" type="error" class="closetask" @click="closetask">终止任务</Button>
      </div>
      <div class="task">
        <FormItem label="任务周期">
          <Select v-model="Nowdoingdata.city" placeholder="Select your city" style="width: 187px" disabled>
            <Option value="day">日</Option>
            <Option value="week">周</Option>
            <Option value="mounth">月</Option>
          </Select>
        </FormItem>
        <FormItem label="Date">
          <DatePicker type="date" placeholder="Select date" v-model="Nowdoingdata.date" disabled></DatePicker>
        </FormItem>
        <FormItem label="人均数量">
          <Input v-model="Nowdoingdata.name" disabled placeholder="输入任务名" style="width: 187px"></Input>
        </FormItem>
      </div>
      <div class="task">
        <FormItem label="执行人员">
          <Input v-model="Nowdoingdata.name" disabled placeholder="输入任务名"></Input>
        </FormItem>
      </div>
    </Form>
    <div class="Customerlist">
      <span class="title">客户列表</span>
      <Table max-height="278" :columns="columns1" :data="data1"></Table>
    </div>
    <div class="footer">点击加载更多</div>
  </Modal>

</template>

<script>
export default {
  props: {
    Nowdoingdata: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return {
          name: '',
          city: 'day',
          date: '',
          time: '',
        }
      }
    },
  },
  data () {
    return {
      showNowdoing: false,
      value: '',
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
      ]
    }
  },
  methods: {
    ok () {
      this.$Message.info('Clicked ok');
    },
    cancel () {
      this.$Message.info('Clicked cancel');
    },
    closetask() {
      alert('终止')
    }
  },
}
</script>

<style scoped>
.Customerlist {
  width: 100%;
  margin-top: 25px;
  min-height: 100px;
  box-sizing: border-box;
  border-top: 1px solid #e1e1e1;
}
.Customerlist .title {
  margin-left: 10px;
  font-size: 14px;
  line-height: 30px;
}
.newtask .title .closetask {
  position: absolute;
  right: 0px;
  top: 5px;
}
.footer {
  width: 100px;
  padding: 0 10px;
  padding-top: 8px;
  margin: 0 auto;
  cursor: pointer;
}
.footer:hover {
  color: #236bd7;
}
</style>
<style>
.newtask .title .closetask span {
  color: #fff;
}
.newtask .title {
  position: relative;
  width: 460px;
  margin: 0 auto;
  color: rgba(16, 16, 16, 1);
}
.newtask .title span {
  color: #d72c2c;
}
.newtask .title .source {
  margin: 6px 0 10px 0;
}
.newtask .task {
  width: 460px;
  margin: 0 auto;
  padding: 10px 0 5px 6px;
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
