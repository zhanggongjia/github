<template>
  <div class="newclient">
    <Button @click="ShowNewclient = true" style="margin-left: 30px;" type="primary">新建客户</Button>
    <Drawer title="客户详情" v-model="ShowNewclient" width="720" :styles="styles">
      <div class="detailTop">
        <div><span class="attr">姓名：</span><span>孙蓝蓝</span></div>
        <div><span class="attr">职位：</span><span>孙蓝蓝</span></div>
        <div><span class="attr">手机号：</span><span>孙蓝蓝</span></div>
        <div><span class="attr">号码归属地：</span><span>孙蓝蓝</span></div>
        <div><span class="attr">企业名称：</span><span>孙蓝蓝</span></div>
        <div><span class="attr">电话结果：</span><span>孙蓝蓝</span></div>
      </div>
      <Form :model="formData">
        <Row :gutter="32">
          <Col span="12">
          <FormItem label="Name" label-position="top">
            <Input v-model="formData.name" placeholder="please enter user name" />
          </FormItem>
          </Col>
          <Col span="12">
          <FormItem label="Url" label-position="top">
            <Input v-model="formData.url" placeholder="please enter url">
            <span slot="prepend">http://</span>
            <span slot="append">.com</span>
            </Input>
          </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="12">
          <FormItem label="Owner" label-position="top">
            <Select v-model="formData.owner" placeholder="please select an owner">
              <Option value="jobs">Steven Paul Jobs</Option>
              <Option value="ive">Sir Jonathan Paul Ive</Option>
            </Select>
          </FormItem>
          </Col>
          <Col span="12">
          <FormItem label="Type" label-position="top">
            <Select v-model="formData.type" placeholder="please choose the type">
              <Option value="private">Private</Option>
              <Option value="public">Public</Option>
            </Select>
          </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="12">
          <FormItem label="Approver" label-position="top">
            <Select v-model="formData.approver" placeholder="please choose the approver">
              <Option value="jobs">Steven Paul Jobs</Option>
              <Option value="ive">Sir Jonathan Paul Ive</Option>
            </Select>
          </FormItem>
          </Col>
          <Col span="12">
          <FormItem label="DateTime" label-position="top">
            <DatePicker v-model="formData.date" type="daterange" placeholder="please select the date" style="display: block" placement="bottom-end"></DatePicker>
          </FormItem>
          </Col>
        </Row>
        <FormItem label="Description" label-position="top">
          <Input type="textarea" v-model="formData.desc" :rows="4" placeholder="please enter the description" />
        </FormItem>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="ShowNewclient = false">Cancel</Button>
        <Button type="primary" @click="ShowNewclient = false">Submit</Button>
      </div>
    </Drawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ShowNewclient: false,
      styles: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        paddingBottom: '53px',
        position: 'static'
      },
      formData: {
        name: '',
        url: '',
        owner: '',
        type: '',
        approver: '',
        date: '',
        desc: ''
      },
    }
  }
}
</script>
<style>
.newclient {
  display: inline-block;
}
</style>
<style>
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
</style>