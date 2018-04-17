<template>
    <div class="app-header">
        <Clock 
            :hours = "now.getHours()"
            :minutes = "now.getMinutes()"
            :seconds = "now.getSeconds()"
            :day = "now.getDays()"
            :month = "now.getMonths()"
            :year = "now.getYears()"
        />
        <TasksList 
            :tasks = "getTasks"
            v-if="getTasks.length"
        />
    </div>
</template>

<script>
import Tasks from "../../services/Tasks";
import Time from "../../services/Time";
import Clock from "./header-clock";
import TasksList from "./header-tasks";
import {EventBus} from "../../helpers/event-bus.js"

export default {
    components:{
        Clock,
        TasksList
    },
    data(){
        return{
            now: new Time(),
            tasks: new Tasks()
        }
    },

    computed : {
        getTasks(){
            return this.tasks.getProgressTasks( this.now.getMilliseconds() );
        }
    },
    created(){
        console.log();
        setInterval(() => this.now = new Time() ,1000);
    },
    beforeUpdate(){
        EventBus.$emit('get-second',  this.now.getMilliseconds());  
    }

}
</script>

