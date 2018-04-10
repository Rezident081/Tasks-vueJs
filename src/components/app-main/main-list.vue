<template>
    <div class="row task-list">
        <ListItem 
            v-for="({id, title, description}) of tasks"
            :key="id"
            :id="id"
            :title="title"
            :description="description"
        />
    </div>
</template>

<script>
import ListItem from "./main-list-item"
import tasks from "../../models/tasks.json"
export default {
    components:{
        ListItem
    },
    data(){
        return {
            tasks
        }
    }
}
</script>

