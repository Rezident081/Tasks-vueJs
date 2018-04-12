<template>
  <main class="container-fluid app-main">
      <Title :text="`Task list`" />
      <List :tasks="tasks" />
  </main>
</template>

<script>
import Title from "./main-title"
import List from "./main-list"
import tasks from "../../models/tasks.json"
export default {
    components:{
        Title,
        List
    },
    data(){
        return {
            tasks
        }
    }

}
</script>

