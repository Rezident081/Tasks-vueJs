<template>
    <div class="row task-list">
        <ListItem 
            v-for="task of tasks"
            :key = "task.id"
            :task = "task"
            :now = "now"
        />
    </div>
</template>

<script>
import ListItem from "./main-list-item"

export default {
    props: ["tasks", "now"],
    components:{
        ListItem
    }
}
</script>

