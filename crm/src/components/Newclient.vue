<template>
  <div class="newclient">
    <Button @click="ShowNewclient = true" style="margin-left: 30px;" type="primary">新建客户</Button>
    <Drawer title="客户详情" class="detail" v-model="ShowNewclient" width="380">
      <div class="detailTop padding20">
        <div><span class="attr"><Icon type="md-person" />姓名：</span><span>孙蓝蓝</span></div>
        <div><span class="attr"><Icon type="md-person" />职位：</span><span>孙蓝蓝</span></div>
        <div><span class="attr"><Icon type="md-person" />手机号：</span><span>孙蓝蓝</span></div>
        <div><span class="attr"><Icon type="md-person" />号码归属地：</span><span>孙蓝蓝</span></div>
        <div><span class="attr"><Icon type="md-person" />企业名称：</span><span>孙蓝蓝</span></div>
        <div><span class="attr"><Icon type="md-person" />电话结果：</span><span>孙蓝蓝</span></div>
      </div>
      <div class="score clearfix padding20">
        <div>综合评分： <Rate disabled v-model="valueDisabled" /></div>
        <div>综合评分： <Rate disabled v-model="valueDisabled" /></div>
        <div>综合评分： <Rate disabled v-model="valueDisabled" /></div>
        <div>综合评分： <Rate disabled v-model="valueDisabled" /></div>
      </div>
      <div>
        <Tabs value="name1" class="tabdetail" :animated="false">
          <TabPane label="时间轴" name="name1">
            <div class="time padding20">2019-09-20星期六</div>
            <div class="Conversation clearfix">
              <div class="left">
                <p>04:26</p>
                <p>下午</p>
              </div>
              <div class="right">
                <p>13100989988<span>进行电话沟通</span></p>
                <p>通话录音<span>037</span></p>
              </div>
            </div>
          </TabPane>
          <TabPane label="详细信息" name="name2">
            <div class="time padding20">2019-09-20星期六</div>
            <Form ref="formValidate" :model="formValidate" :label-width="68" class="formdetail padding20">
                <div class="task">
                  <div class="title">跟进信息</div>
                   <FormItem label="更进人" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                  <FormItem label="销售进度" prop="city">
                    <Select v-model="formValidate.city" placeholder="Select your city" >
                      <Option value="day">日</Option>
                      <Option value="week">周</Option>
                      <Option value="mounth">月</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="创建时间" prop="date">
                    <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                  </FormItem>
                  <FormItem label="备注" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名"></Input>
                  </FormItem>
                  <div class="title">个人信息</div>
                      <FormItem label="邮箱" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                       <FormItem label="QQ" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                       <FormItem label="微信" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                       <FormItem label="生日" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                     <FormItem label="性别" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                           <div class="title">公司信息</div>
                      <FormItem label="办公地址" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                       <FormItem label="企业性质" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                       <FormItem label="经营范围" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                  <FormItem label="注册资本" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                     <FormItem label="企业法人" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                       <FormItem label="人员规模" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                       <FormItem label="企业座机" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                       <FormItem label="企业类型" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                       <FormItem label="行业分类" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                       <FormItem label="主营产品" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                       <FormItem label="公司简介" prop="name">
                    <Input v-model="formValidate.name" placeholder="输入任务名" ></Input>
                  </FormItem>
                </div>
              </Form>
          </TabPane>
        </Tabs>
      </div>
      <!-- <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="ShowNewclient = false">Cancel</Button>
        <Button type="primary" @click="ShowNewclient = false">Submit</Button>
      </div> -->
    </Drawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ShowNewclient: false,
      valueDisabled: 2,
      formValidate: {
        name: '',
        city: 'day',
        gender: 'male',
        date: '',
        time: '',
      },
    }
  },
  created() {
  }
}
</script>
<style>
.padding20 {
  padding: 0 20px;
}
.newclient {
  display: inline-block;
  color: rgba(16, 16, 16, 1)
}
.detail {
  color: rgba(16, 16, 16, 1);
}

.score {
  padding: 10px 0 15px 6px;
}
.score>div{
  width: 50%;
  float: left;
}
.Conversation {
  height: 105px;
  width: 100%;
  text-align: center
}
.Conversation p {
  line-height: 28px;
}
.Conversation .left{
  padding-top: 22px;
  width: 120px;
  height: 100%;
  float: left;
}
.Conversation .right {
  padding-top: 22px;
  width: 260px;
  height: 100%;
  float: left;
  border-left: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
}
.formdetail  {
  padding-right: 50px;
}
.formdetail .title {
  font-size: 16px;
  line-height: 50px; 
}
.detailTop span {
  vertical-align: middle;
  font-size: 14px;
  line-height: 48px;
}
.detailTop .attr {
  width: 42%;
  display: inline-block;
}
.detailTop .attr .ivu-icon {
  font-size:  28px;
  margin-right: 6px;
}
</style>
<style>
.formdetail .ivu-form-item {
    margin-bottom: 20px;
}
.ivu-form .ivu-form-item-label {
      text-align: left;
}

.detail .ivu-drawer-body {
  padding: 0;
  padding-top: 15px;
}
.demo-drawer-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
}
.tabdetail {
  color: rgba(16, 16, 16, 1);
}
.tabdetail .time {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #e1e1e1;
}
.tabdetail .ivu-tabs-nav {
  width: 100%;
}
.tabdetail .ivu-tabs-nav .ivu-tabs-tab-active{
  background-color: #57a3f3;
}
.tabdetail .ivu-tabs-nav .ivu-tabs-tab-active,
.tabdetail .ivu-tabs-nav .ivu-tabs-tab-active:hover{
  color: #fff;
}
.tabdetail .ivu-tabs-nav-scroll {
  width: 100%;
}
.tabdetail .ivu-tabs-nav .ivu-tabs-tab {
  width: 50%;
  margin-right: 0;
  text-align: center;
}
.tabdetail .ivu-tabs-bar {
  margin-bottom:0; 
}
.tabdetail .ivu-tabs-ink-bar {
  height: 0px;
}
</style>