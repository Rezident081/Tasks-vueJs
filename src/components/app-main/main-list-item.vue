<template>
    <div class="col-lg-4 animated fadeIn">
        <div class="card">
            <div class="card-body">
                <p class="card-title">{{title}}</p>
                <p class="card-text">{{description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id', 'title', 'description']
}
</script>


