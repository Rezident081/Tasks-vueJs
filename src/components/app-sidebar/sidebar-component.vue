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
import Tasks from "../../services/Tasks"
import Title from "./sidebar-title"
import List from "./sidebar-list"
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
            tasks : new Tasks(),
            now : new Date().getTime()
        }
    },
    computed:{
        getTasks( ){
           return this.tasks.getEndTasks( this.now );
        }
    },
    methods:{
        handlerClear(val){
            if(val){
                this.tasks.deleteEndTasks();
            }
        },
    },
    created(){
        EventBus.$on('get-second', val => this.now = val);
        console.log(this.tasks);
    }
}
</script>

