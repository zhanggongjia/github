<template>
  <li class="treeli">
    <p>{{ model.nodeName }} </p>
    <ul class="treeul">
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
      open: false,
      isFolder: true
    };
  },
  methods: {
    clickShow (model, type) {
    },
    showmd (model) {

    }
  },
  created () {
  }
};
</script>
<style scope>
</style>
