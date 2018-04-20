<template>
    <span @click="clearTasks" class="clear-task-button animated fadeIn">Clear tasks</span>
</template>

<script>
export default {
    methods:{
        clearTasks(){
            this.$emit('clearTasks');
        }
    }
}
</script>
