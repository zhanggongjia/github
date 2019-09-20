<template>
  <div class="Allocation">
    <header>
      <span class="add" @click="showNewtask">
        <Icon style="padding-bottom: 4px;" type="md-add-circle" size="22" />新建任务</span>
      <Dropdown class="selectlist" trigger="click">
        <span class="title">选择员工<Icon type="ios-arrow-down"></Icon></span>
        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </header>
    <div class="conent">
      <Row :gutter="35">
        <Col span="6">
        <div class="list">
          <span class="title">进行中-4</span>
          <ul>
            <li @click="showNowdoing">
              <p class="task">2019-06-18任务<span>(过期)</span></p>
              <div class="complete">完成： 0%</div>
            </li>
            <li @click="showNowdoing">
              <p class="task">2019-06-18任务<span>(过期)</span></p>
              <div class="complete">完成： 0%</div>
            </li>
            <li @click="showNowdoing">
              <p class="task">2019-06-18任务<span>(过期)</span></p>
              <div class="complete">完成： 0%</div>
            </li>
          </ul>
        </div>
        </Col>
        <Col span="6">
        <div class="list">
          <span class="title">未开始-0</span>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        </Col>
        <Col span="6">
        <div class="list">
          <span class="title">未开始-0</span>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        </Col>
        <Col span="6">
        <div class="list">
          <span class="title">已禁止-0</span>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        </Col>
      </Row>
    </div>
    <Newtask ref="NewtaskDialog"></Newtask>
    <Nowdoing ref="NowdoingDialog" :Nowdoingdata=Nowdoingdata></Nowdoing>

  </div>
</template>

<script>
import Newtask from "@/components/Newtask";
import Nowdoing from "@/components/Nowdoing";
export default {
  data () {
    return {
      Nowdoingdata: {}
    }
  },
  components: { Newtask, Nowdoing },
  methods: {
    showNewtask () {
      this.$refs.NewtaskDialog.shownewtask = true;
    },
    showNowdoing () {
      this.Nowdoingdata = {
        name: '我是name',
        city: 'week',
        date: '2019-09-19',
        time: '2019-09-19',
      }
      this.$refs.NowdoingDialog.showNowdoing = true;
    }
  }
}
</script>

<style scoped>
.Allocation header {
  height: 28px;
}
.Allocation .add {
  margin-left: 38px;
  font-size: 16px;
  color: #236bd7;
  cursor: pointer;
}
.conent {
  padding: 10px 38px;
}
.conent .list {
  background-color: #e1e1e1;
  width: 100%;
  min-height: 720px;
  padding: 15px 6%;
}
.list ul li {
  display: block;
  width: 100%;
  height: 140px;
  margin: 0 auto;
  margin-bottom: 25px;
  margin-top: 8px;
  background-color: #fff;
  cursor: pointer;
}
.list .title {
  font-size: 16px;
}
.list .task {
  color: #000;
  line-height: 70px;
  text-align: center;
  font-size: 14px;
  font-family: SourceHanSansSC-regular;
}
.list .task span {
  color: #d72c2c;
}
.list .complete {
  width: 88px;
  height: 34px;
  line-height: 34px;
  background-color: #ff9800;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-family: SourceHanSansSC-regular;
}
</style>
<style>
.Allocation .selectlist {
  margin-left: 20px;
  float: right;
  margin-right: 50px;
}
.selectlist .title {
  font-size: 14px;
  cursor: pointer;
}
/* .Allocation .ivu-col-span-6 {
  padding: 0 10px;
} */
</style>