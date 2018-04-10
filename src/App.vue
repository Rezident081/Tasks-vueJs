<template>
    <AppContainer />
</template>

<script>
import "./scss/common.scss"
import AppContainer from "./components/app-container/container-component"
export default {
  name: 'app',
  components:{
    AppContainer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

