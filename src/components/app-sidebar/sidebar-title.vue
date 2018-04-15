<template>
    <h2 class="animated fadeIn">
        {{text}}
        <span @click="clearTasks">Clear tasks</span>
    </h2>
</template>

<script>
export default {
    props: ['text'],
    methods:{
        clearTasks(){
            this.$emit('clearTasks', true);
        }
    }
}
</script>

