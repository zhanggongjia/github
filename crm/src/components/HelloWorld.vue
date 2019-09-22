<template>
  <div class="hello">
       <Tabs :animated="false"  :value="theme" @on-click="browseNotice">
        <Tab-pane label="任务分配" name="name1"><Allocation v-if="theme=='name1'"></Allocation></Tab-pane>
        <Tab-pane label="客户列表" name="name2"><Customerlist v-if="theme=='name2'"></Customerlist></Tab-pane>
        <Tab-pane label="回访任务" name="name3"><Returntask v-if="theme=='name3'"></Returntask></Tab-pane>
    </Tabs>
  </div>
</template>

<script>
import Allocation from "@/components/Allocation";
import Customerlist from "@/components/Customerlist";
import Returntask from "@/components/Returntask";
export default {
  data () {
    return {
         theme: 'name1'
    }
  },
  components: { Allocation, Customerlist, Returntask },
  methods:{
    browseNotice(type) {
      this.theme = type;
      console.log(this.theme)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ivu-tabs {
  overflow: inherit;
}
</style>
<style>
  .hello {
    color: pink;
  }
  .clearfix:after{
    content:"";				/*设置内容为空*/
    height:0;				/*高度为0*/
    line-height:0;			/*行高为0*/
    display:block;			/*将文本转为块级元素*/
    visibility:hidden;		/*将元素隐藏*/
    clear:both;				/*清除浮动*/
}
</style>
