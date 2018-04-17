<template>
    <div>
        <div class="card animated fadeIn">
            <div class="card-body">
                <p class="card-title"> {{task.title}} </p> 
                <p class="card-text"> {{task.description}} </p>
                <p class="card-category">
                    <strong>Category</strong> : {{task.category}}
                </p> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['task']
}
</script>
