<template>
  <div class="returntask">
    <header>
        <div class="clearfix">
           <Input v-model="name" style="ipt"><span slot="prepend">工作号</span></Input>
          <Input v-model="name" style="ipt"><span slot="prepend">客户姓名</span></Input>
          <Input v-model="name" style="ipt"><span slot="prepend">客户电话</span></Input>
          <Input v-model="value12" class="select">
                  <span slot="prepend">业务类型</span>
                  <Select v-model="select2" slot="append" style="width: 137px">
                      <Option value="com">.com</Option>
                      <Option value="org">.org</Option>
                      <Option value="io">.io</Option>
                  </Select>
            </Input>
        </div>
        <div class="search clearfix">
            <Button type="primary" icon="md-search">搜索</Button>
            <Button type="primary" icon="md-refresh">重置</Button>
            <Button type="primary" icon="md-add">新增</Button>
             <Input v-model="value12" class="select">
                  <span slot="prepend">公司名称</span>
                  <Select v-model="select2" slot="append" style="width: 137px">
                      <Option value="com">.com</Option>
                      <Option value="org">.org</Option>
                      <Option value="io">.io</Option>
                  </Select>
            </Input>
              <Input v-model="value12" class="select">
                  <span slot="prepend">负责员工</span>
                  <Select v-model="select2" slot="append" style="width: 137px">
                      <Option value="com">.com</Option>
                      <Option value="org">.org</Option>
                      <Option value="io">.io</Option>
                  </Select>
            </Input>
        </div>
    </header>
      <div class="conent">
           <Table class="CustomerTable" :columns="columns1" :data="data1"></Table>
            <div class="CustomerPage">
              <div>
                  <span>共 40 条</span>
                <Page :total="40" size="small" show-elevator show-sizer />
              </div>
            </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name:'',
      value12: '',
      select1: 'com',
      select2: 'com',
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
        },
        {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    },{
            title: '是否二次合作',
            key: 'chose',
            width: 200,
            align: 'center',
            render: (h, params) => {
              console.log(params.row)
              let close = params.row.close;
              console.log(close)
              return h('div', [
                h('Radio', {
                  props: {
                    value: close
                  },
                  style: {
                            marginRight: '20px'
                        },
                  on: {
                    'on-change': () => {
                        this.check(params.index)
                    }
                  }
                },'是'),
                 h('Radio', {
                  props: {
                    value: close
                  },
                  on: {
                    'on-change': () => {
                        this.check(params.index)
                    }
                  }
                },'否')
              ])
            }
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          close: false,
          address: '15064359885',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
             close: false,
          address: '15064359885',
          date: '2016-10-01'
        },
        {
          name: 'Jim Green',
          age: 24,
             close: false,
          address: '15064359885',
          date: '2016-10-01'
        },
        {
          name: 'Jim Green',
          age: 24,
             close: false,
          address: '15064359885',
          date: '2016-10-01'
        }

      ]
    }
  },
  methods: {
      show (index) {
          // this.$Modal.info({
          //     title: 'User Info',
          //     content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
          // })
      },
      remove (index) {
          // this.data6.splice(index, 1);
      },
      check (index) {
           console.log(index)
      },
  }
}
</script>
<style scoped>
.returntask {
  min-height: 750px;
}
header {
  padding: 0 30px;
}
.search {
  padding-top: 20px;
}
.search button {
      float: left;
    margin-right: 20px;
}
.conent {
   padding: 35px 30px;
}
.CustomerPage {
  height: 50px;
  margin-top: 25px;
}

</style>
<style>
  .ivu-input-group {
    width: 200px;
    float: left;
    margin-right: 20px;
  }
  .select .ivu-input {
    padding: 0;
    border-left: none;
  }
  .select .ivu-input-group-append {
    background-color: #fff;
  }
.CustomerPage>div {
 float: right;
  margin-right: 30px;
}
.CustomerPage .ivu-page {
    display: inline-block;
}
</style>
