<template>
    <div class="sidebar-list">
        <Item 
            v-for="({id, title, category, description}) of tasks"
            :key="id"
            :title="title"
            :category="category"
            :description="description"
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
