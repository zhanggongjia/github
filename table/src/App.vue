<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
  color: #2c3e50;
}
</style>
