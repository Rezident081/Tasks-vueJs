<template>
    <div class="sidebar-list">
        <Item 
            v-for="task of tasks"
            :key = "task.id"
            :task = "task"
        />
    </div>
</template>

<script>
import Item from "./sidebar-list-item"

export default {
    props: ['tasks'],
    components:{
        Item
    }
}
</script>
