<template>
    <div>
        <div class="row d-flex align-items-end aside-header">
            <div class="col-md-8 no-padding">
                <Title :text="`Past tasks`" />
            </div>
            <div class="col-md-4 no-padding">
                <ClearBtn @clearTasks="handleClear" v-if="getCancelTasks.length" />
            </div>
        </div>
        <List :tasks="getCancelTasks" />
    </div>
</template>

<script>
import Title from "./sidebar-title"
import List from "./sidebar-list"
import tasks from "../../models/tasks.json"
import ClearBtn from "./sidebar-clear-btn"
import {EventBus} from "../../helpers/event-bus.js"

export default {
    components:{
        Title,
        List,
        ClearBtn
    },
    data(){
        return {
            tasks,
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
                //this.tasks = []
            }
        }
    },
    created(){
        EventBus.$on('get-second', val => this.now = val)
    }
}
</script>

