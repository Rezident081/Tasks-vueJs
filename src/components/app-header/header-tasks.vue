<template>
    <div class="header-tasks-list animated fadeIn">
        <p>Taksk in progress:</p>
        <ul>
            <li v-for="task of tasks" :key="task.id">
                <a href="#" @click.prevent="openModal(task)">{{task.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props : ['tasks'],
    methods:{
        openModal(task){
            this.$modal.show('single-modal', task);
        }
    }
}
</script>


