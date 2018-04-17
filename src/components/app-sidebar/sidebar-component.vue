<template>
    <div>
        <div class="row d-flex align-items-end aside-header">
            <div class="col-md-8 col-8 no-padding">
                <Title :text="`Past tasks`" />
            </div>
            <div class="col-md-4 col-4 no-padding text-right">
                <ClearBtn @clearTasks="handlerClear" v-if="getTasks.length" />
            </div>
        </div>
        <List :tasks="getTasks" />
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
            tasks : Object.assign(tasks),
            now : new Date().getTime()
        }
    },
    computed:{
        getTasks( ){
            return this.tasks.filter( el => {
                const end = new Date(el.stop).getTime();
                if( this.now >= end ) el.isActive = false;
                return !el.isActive;
            })
        }
    },
    methods:{
        handlerClear(val){
            this.tasks = this.tasks.filter( el => {
                return el.isActive;
            })
        }
    },
    created(){
        EventBus.$on('get-second', val => this.now = val);
           
    }
}
</script>

