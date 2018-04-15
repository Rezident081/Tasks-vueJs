<template>
    <div class="header-tasks-list animated fadeIn">
        <p>Taksk in progress:</p>
        <ul>
            <li v-for="{id,title} of tasks" :key="id">
                <a href="#">{{title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props : ['tasks']
}
</script>


