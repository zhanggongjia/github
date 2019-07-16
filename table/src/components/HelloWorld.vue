<template>
  <div class="treeDiv">
    <ul v-for="menuItem in columntree">
      <mytree :model="menuItem"></mytree>
    </ul>
  </div>
</template>
<script>
import mytree from "@/components/tree";
import treeJson from "@/components/tree.json";


export default {
  components: {
    mytree
  },
  data () {
    return {
      columntree: [

      ]

    }
  },
  created () {
    console.log(treeJson)
    this.columntree = treeJson.data.nodeChildren
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.treeDiv {
  width: 300px;
  height: 600px;
  background-color: pink;
}
ul {
}
</style>
