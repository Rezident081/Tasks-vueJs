<template>
    <div class="button-add-container">
        <a href="#" @click.prevent="clickHandler">+</a>
    </div>
</template>

<script>
export default {
    methods : {
        clickHandler(){
            this.$modal.show('form-modal');
        }
    }
}
</script>

