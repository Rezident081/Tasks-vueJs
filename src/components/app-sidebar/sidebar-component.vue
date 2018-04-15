<template>
    <div>
        <Title :text="`Past tasks`" @clearTasks="handleClear" />
        <List :tasks="getCancelTasks" />
    </div>
</template>

<script>
import Title from "./sidebar-title"
import List from "./sidebar-list"
import tasks from "../../models/tasks.json"
import {EventBus} from "../../helpers/event-bus.js"

export default {
    components:{
        Title,
        List
    },
    data(){
        return {
            tasks,
            defaultTasks: tasks,
            now : new Date().getTime()
        }
    },
    computed:{
        getCancelTasks( ){
            return this.tasks.filter( el => {
                const endTime = new Date(el.stop).getTime();
                return endTime < this.now;
            })
        }
    },
    methods:{
        handleClear(val){
            if(val){
                this.tasks = []
            }
        }
    },
    created(){
        EventBus.$on('get-second', val => this.now = val)
    }
}
</script>

