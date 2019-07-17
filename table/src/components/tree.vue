<template>
  <li role="treeitem" draggable="false" class="tree-node" :class="{'tree-closed': !open,'tree-open': open}">
    <i role="presentation" class="tree-icon tree-ocl" @click="clickShow"></i>
    <div class="tree-anchor">
      <i role="presentation" v-if="checkbox" class="tree-icon tree-checkbox" :class="{'tree-selected': selected}"></i>
      <i role="presentation" class="tree-icon tree-themeicon"></i>
      <span>{{ model.nodeName }}--{{open}}---{{model.selected=1}}</span>
    </div>
    <ul v-show="open" class="tree-container-ul tree-children tree-wholerow-ul" style="max-height: 144px;transition-duration: 300ms;transition-property: max-height;display: block;">
      <tree-menu v-for="item in model.nodeChildren" :model="item"></tree-menu>
    </ul>
  </li>
</template>
 <script>
export default {
  name: "treeMenu",
  props: ["model"],
  data () {
    return {
      checkbox: true,
      open: false,
      isFolder: true,
      selected: false,
    };
  },
  methods: {
    clickShow (model, type) {
      this.open = !this.open
    },
    clickCheckbox (model) {
      console.log(model)
      this.selected = !this.selected
      console.log(model)
    },
    showmd (model) {

    }
  },
  created () {
  }
};
</script>
<style>
.tree-defaults .tree-node {
  min-height: 24px;
  line-height: 24px;
  margin-left: 30px;
  min-width: 24px;
}
.tree-defaults .tree-container-ul .tree-node {
  margin-left: 0;
  margin-right: 0;
}
.tree-defaults .tree-icon,
.tree-defaults .tree-node {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAABgCAYAAABsS6soAAAAGXRFW…Cw1gDpAmOAABggBggAGCAGiAECYIAYIABggBggAEAC/xNgABT+eKeUWyLUAAAAAElFTkSuQmCC);
}
.tree-defaults .tree-node {
  background-position: -292px -4px;
  background-repeat: repeat-y;
}

.tree-defaults .tree-closed > .tree-ocl {
  background-position: -100px -4px;
}
.tree-defaults .tree-icon,
.tree-defaults .tree-node {
  background-repeat: no-repeat;
  background-color: transparent;
}
.tree-defaults .tree-icon {
  width: 24px;
}
.tree-defaults .tree-anchor,
.tree-defaults .tree-icon {
  line-height: 24px;
  height: 24px;
}
.tree-default .tree-open > .tree-ocl {
  background-position: -132px -4px;
}
/* .tree-default.tree-checkbox-selection .tree-selected>.tree-checkbox, .tree-default .tree-checked>.tree-checkbox {
    background-position: -228px -4px;
} */
.tree-default .tree-checkbox.tree-selected {
  background-position: -228px -4px;
}
</style>
