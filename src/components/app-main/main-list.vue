<template>
    <div class="row task-list">
        <ListItem 
            v-for="({id, title, description, start, stop, category}) of listTasks"
            :key="id"
            :id="id"
            :title="title"
            :description="description"
            :category="category"
            :start="start"
            :stop="stop"
        />
    </div>
</template>

<script>
import ListItem from "./main-list-item"
import {EventBus} from "../../helpers/event-bus.js"

export default {
    props: ["tasks"],
    components:{
        ListItem
    },
    data(){
        return {
            listTasks : []
        }
    },
    created(){
        this.filterByDate();
        EventBus.$on('get-second', this.filterByDate);
    },
    methods:{

        filterByDate(val = new Date().getTime()){
            this.listTasks = this.tasks.filter(el => {
                const endTime = new Date(el.stop).getTime();
                return endTime >= val;
            })
        },
        
    }
}
</script>

