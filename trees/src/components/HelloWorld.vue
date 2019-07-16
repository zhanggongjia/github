<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <v-jstree :data="data" show-checkbox multiple allow-batch whole-row @item-click="itemClick">
              <template scope="_">
         <div style="display: inherit; width: 200px">
           <i :class="_.vm.themeIconClasses" role="presentation" v-if="!_.model.loading"></i>
           {{_.model.text}}
           
             <button style="border: 0px; background-color: transparent; cursor: pointer; width: 20px;height: 18px;background: pink;" @click="customItemClick(_.vm, _.model, $event)">
             <i class="fa fa-remove"></i>
             </button>
                <button style="border: 0px; background-color: transparent; cursor: pointer; width: 20px;height: 18px;background: pink;" @click="customItemClick(_.vm, _.model, $event)">
             <i class="fa fa-remove"></i>
             </button>
         </div>
       </template>
     </v-jstree>
     <!-- 自定义标签 -->
     <v-jstree :data="data">
       <template scope="_">
         <div style="display: inherit; width: 200px">
           <i :class="_.vm.themeIconClasses" role="presentation" v-if="!_.model.loading"></i>
           {{_.model.text}}
           
             <button style="border: 0px; background-color: transparent; cursor: pointer; width: 20px;height: 18px;background: pink;" @click="customItemClick(_.vm, _.model, $event)">
             <i class="fa fa-remove"></i>
             </button>
                <button style="border: 0px; background-color: transparent; cursor: pointer; width: 20px;height: 18px;background: pink;" @click="customItemClick(_.vm, _.model, $event)">
             <i class="fa fa-remove"></i>
             </button>
         </div>
       </template>
     </v-jstree>
  </div>
</template>

<script>
import VJstree from 'vue-jstree'
export default {
   components: {
        VJstree
      },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
             data: [
          {
            "text": "Same but with checkboxes",
            "children": [
              {
                "text": "initially selected",
              },
              {
                "text": "custom icon",
                "icon": "fa fa-warning icon-state-danger"
              },
              {
                "text": "initially open",
                "icon": "fa fa-folder icon-state-default",
                "children": [
                  {
                    "text": "Another node"
                  }
                ]
              },
              {
                "text": "custom icon",
                "icon": "fa fa-warning icon-state-warning"
              },
              {
                "text": "disabled node",
                "icon": "fa fa-check icon-state-success",
                "disabled": true
              }
            ]
          },
          {
            "text": "Same but with checkboxes",
            "children": [
              {
                "text": "initially selected",
              },
              {
                "text": "custom icon",
                "icon": "fa fa-warning icon-state-danger"
              },
              {
                "text": "initially open",
                "icon": "fa fa-folder icon-state-default",
                "children": [
                  {
                    "text": "Another node"
                  }
                ]
              },
              {
                "text": "custom icon",
                "icon": "fa fa-warning icon-state-warning"
              },
              {
                "text": "disabled node",
                "icon": "fa fa-check icon-state-success",
                "disabled": true
              }
            ]
          },
          {
            "text": "Same but with checkboxes",
            "children": [
              {
                "text": "initially selected",
              },
              {
                "text": "custom icon",
                "icon": "fa fa-warning icon-state-danger"
              },
              {
                "text": "initially open",
                "icon": "fa fa-folder icon-state-default",
                "children": [
                  {
                    "text": "Another node"
                  }
                ]
              },
              {
                "text": "custom icon",
                "icon": "fa fa-warning icon-state-warning"
              },
              {
                "text": "disabled node",
                "icon": "fa fa-check icon-state-success",
                "disabled": true
              }
            ]
          },
        ]
    }
  },
  methods: {
      itemClick (node) {
          console.log(node.model.text + ' clicked !')
        },
        customItemClick(a,b,c) {
          console.log(a)
          console.log(b)
          console.log(c)
          alert('添加删除')
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
