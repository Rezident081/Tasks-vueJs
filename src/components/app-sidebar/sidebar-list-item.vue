<template>
    <div>
        <div class="card animated fadeIn">
            <div class="card-body">
                <p class="card-title">{{title}}</p> 
                <p class="card-text">{{description}}</p>
                <p class="card-category"><strong>Category</strong> : {{category}}</p> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'category', 'description']
}
</script>
