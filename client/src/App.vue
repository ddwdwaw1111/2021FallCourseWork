<template>
  <Nav />
  <router-view/>
  <messages />
</template>

<style lang="scss">

</style>

<script>
import Messages from './components/Messages.vue';
import Nav from "./components/Nav";

export default {
  components:{
      Nav,
      Messages
  }
}
</script>