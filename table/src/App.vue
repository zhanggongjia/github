<template>
  <div id="app">
    {{treeData}}
    <vue-tree v-model="checkedIds" :tree-data="treeData" />
  </div>
</template>
<script>
import VueTree from 'vue-simple-tree/src/components/VueTree.vue'
export default {
  name: 'app',
  components: { VueTree },
  data () {
    return {
      // 复选ids,可传入id数组作为初始选中状态,如[3,4,8]
      checkedIds: [],
      // tree数据
      "treeData": [
        {
          "id": "1",
          "label": "Root",
          "children": [
            {
              "id": "2",
              "label": "Node2"
            },
            {
              "id": "3",
              "label": "Node3"
            },
            {
              "id": "4",
              "label": "Node4",
              "children": [
                {
                  "id": "5",
                  "label": "Node5"
                }
              ]
            }
          ]
        }
      ],
      // 设置项
      options: {}
    }
  },
  created () {

  }
}
</script>