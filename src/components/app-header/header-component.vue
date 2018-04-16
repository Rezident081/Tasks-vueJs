<template>
    <div class="app-header">
        <Time 
            :hours="hours | twoDigids"
            :minutes="minutes | twoDigids"
            :seconds="seconds | twoDigids"
            :day="day"
            :month="month"
            :year="year"
        />
        <TaskList 
            :tasks = "getTasks"
            v-if="getTasks.length"
        />
    </div>
</template>

<script>
import Time from "./header-time"
import TaskList from "./header-tasks"
import tasks from "../../models/tasks.json"
import {EventBus} from "../../helpers/event-bus.js"
export default {
    components:{
        Time,
        TaskList
    },
    data(){
        return{
            now: new Date(),
            months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            tasks
        }
    },
    computed:{
        seconds() {
            return this.now.getSeconds();
        },

        minutes() {
            return this.now.getMinutes();
        },

        hours() {
            return this.now.getHours();
        },

        day(){
            return this.now.getDate();
        },

        month(){
            return this.months[this.now.getMonth()];
        },

        year(){
            return this.now.getFullYear();
        },

        getTasks(){
            return this.tasks.filter( el => {
                const start = new Date(el.start).getTime();
                const end = new Date(el.stop).getTime();

                return (this.now >= start && this.now < end);
            })
        }
    },
    filters:{
        twoDigids(val){
            if(val.toString().length <= 1)
            {
                return "0"+val.toString();
            }
            return val.toString();
        }
    },
    created(){
        setInterval(() => {
            this.now = new Date()
        },1000);
    },
    beforeUpdate(){
        EventBus.$emit('get-second',  this.now.getTime());  
    }

}
</script>

