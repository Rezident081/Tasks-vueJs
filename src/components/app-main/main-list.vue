<template>
    <div class="row task-list">
        <ListItem 
            v-for="({id, title, description, start, stop, category, status}) of tasks"
            :key="id"
            :id="id"
            :title="title"
            :description="description"
            :category="category"
            :start="start"
            :stop="stop"
            :now="now"
            :status="status"
        />
    </div>
</template>

<script>
import ListItem from "./main-list-item"

export default {
    props: ["tasks", "now"],
    components:{
        ListItem
    },
    computed:{
        setStatus(){
            console.log(this.setStatus);
        }
    }

}
</script>

