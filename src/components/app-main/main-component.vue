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
                const start = new Date(el.start).getTime();
                const end = new Date(el.stop).getTime();

                el.status = this.setStatus(start, end);

                return end >= this.now;
            })
        }
    },
    methods:{
        setStatus(start, end){
            if(this.now >= start && this.now < end) return 'In progress';
            if(this.now >= end) return 'Ended';
            return 'Publish';
        },
        addTasks(obj){
            obj = Object.assign( obj, { id: this.tasks.length + 1 } );
            this.tasks.push(obj);
        }
    },
    created(){
        EventBus.$on('get-second', val => this.now = val )
        EventBus.$on('create-new-task', this.addTasks);
    }

}
</script>

