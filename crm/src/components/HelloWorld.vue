<template>
  <div class="hello">
    <Tabs value="name1">
      <TabPane label="任务分配" name="name1">
        <Allocation></Allocation>
      </TabPane>
      <TabPane label="客户列表" name="name2">
        <Customerlist></Customerlist>
      </TabPane>
      <TabPane label="回访任务" name="name3">
        <Returntask></Returntask>
      </TabPane>
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
    }
  },
  components: { Allocation, Customerlist, Returntask }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
