<template>
    <div class="date-component">
        Today is : {{day}} {{month}}, {{year}}
    </div>
</template>

<script>
export default {
    props: ['day','month','year']
}
</script>

