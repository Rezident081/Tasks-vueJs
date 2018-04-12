<template>
    <div 
        class="card-progress" 
        :class="state"
        :style="{width : progress + '%'}"></div>
</template>

<script>
export default {
    props:['progress','state']
}
</script>


