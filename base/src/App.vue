<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './views/Home.vue'
export default {
  name: 'app',
  components: { Home }
}
</script>
<style lang="scss">
body, html{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
