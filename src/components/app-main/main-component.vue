<template>
  <main class="container-fluid app-main">
      <Title :text="`Task list`" />
      <List />
  </main>
</template>

<script>
import Title from "./main-title"
import List from "./main-list"
export default {
    components:{
        Title,
        List
    }

}
</script>

