<template>
    <div 
        class="card-progress" 
        :style="{width : progress + '%'}">
    </div>
        
</template>

<script>
export default {
    props:['progress']
}
</script>


