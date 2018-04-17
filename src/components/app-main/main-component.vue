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
import Title from "./main-title"
import List from "./main-list"
import NotFound from "./main-not-found"
import tasks from "../../models/tasks.json"
import {EventBus} from "../../helpers/event-bus.js"

export default {
    components:{
        Title,
        List,
        NotFound
    },
    data(){
        return {
            tasks,
            now: new Date().getTime()
        }
    },
    computed:{
        getTasks(){
            return this.tasks.filter( el => {
                const end = new Date(el.stop).getTime();
                return el.isActive && this.now < end;
            })
        }
    },
    methods:{
        addTasks(obj){
            obj = Object.assign( obj, { id: this.tasks.length + 1 } );
            this.tasks.push(obj);
        },
        removeTask(id){
            for(let i = 0, n = this.tasks.length; i < n; i++){
                if( this.tasks[i].id === id ) this.tasks[i].isActive = false;
            }
        }
    },
    created(){
        EventBus.$on('get-second', val => this.now = val );
        EventBus.$on('create-new-task', this.addTasks);
        EventBus.$on('get-del-id-task', this.removeTask);
    }

}
</script>

