<template>
  <main class="container-fluid app-main">
      <Title :text="`Task list`" />
      <List 
            :tasks="getTasks" 
            :now="now"
            v-if="getTasks.length"
        />
      <NotFound v-if="!getTasks.length" :text="`Not found`" />
  </main>
</template>

<script>
import Tasks from "../../services/Tasks"
import Title from "./main-title"
import List from "./main-list"
import NotFound from "./main-not-found"

import {EventBus} from "../../helpers/event-bus.js"

export default {
    components:{
        Title,
        List,
        NotFound
    },
    data(){
        return {
            tasks : new Tasks(),
            now: new Date().getTime()
        }
    },
    computed:{
        getTasks(){
            const tasks = this.tasks.getTaks( this.now );
            return tasks.filter( el => {
                return el.status !== 'Ended';
            });
        }
    },
    methods:{
        deleteTask(id){
            this.tasks.moveToTrash(id);
        },
        createTask(obj){
            this.tasks.addTask(obj);
        }
    },
    created(){
        EventBus.$on('get-second', val => this.now = val );
        EventBus.$on('create-new-task', this.createTask);
        EventBus.$on('get-del-id-task', this.deleteTask);
    }

}
</script>

