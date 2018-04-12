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
    </div>
</template>

<script>
import Time from "./header-time-component"
import {EventBus} from "../../helpers/event-bus.js"
export default {
    components:{
        Time
    },
    data(){
        return{
            now: new Date(),
            months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }
    },
    created(){
        setInterval(() => {
            this.now = new Date()
        },1000);
    },
    computed:{
        seconds() {
            EventBus.$emit('get-second',  this.now.getTime())
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
    }

}
</script>

