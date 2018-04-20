<template>
    <div class="col-lg-4">
        <div class="card animated fadeIn">
            <div class="card-body">
                <p class="card-title"> {{task.title}} </p>
                <p class="card-text"> {{task.description}} </p>
                <p class="card-category">
                    <strong>Category</strong> : {{task.category}}
                </p>
                <p class="card-status">
                    <strong>Status</strong> : {{task.status}}
                </p>
                <a href="#" class="card-more" @click.prevent="modalHandler">More info</a>
                <Progress 
                    :progress="getProgress" 
                />
            </div>
        </div>
    </div>
</template>

<script>
import Progress from "./main-list-item-progress"
import {EventBus} from "../../helpers/event-bus.js"

export default {
    components:{
        Progress,
    },
    props: ['task', 'now'],
    computed:{
        getProgress(){
            const start = new Date(this.task.start).getTime();
            const end = new Date(this.task.stop).getTime();
            return Math.round( ( (this.now - start) / (end - start) ) * 100);
        },
    },
    methods:{
        modalHandler(){
            this.$modal.show('single-modal', this.task);
        }
    }
}
</script>


