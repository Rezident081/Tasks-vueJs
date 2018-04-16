<template>
    <div class="col-lg-4 animated fadeIn">
        <div class="card">
            <div class="card-body">
                <p class="card-title">{{title}}</p>
                <p class="card-text">{{description}}</p>
                <p class="card-category">
                    <strong>Category</strong> : {{category}}
                </p>
                <p class="card-status">
                    <strong>Status</strong> : {{status}}
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
    props: ['id', 'title', 'description', 'category', 'start', 'stop', 'now', 'status'],
    computed:{
        getProgress(){
            const start = new Date(this.start).getTime();
            const end = new Date(this.stop).getTime();
            return Math.round( ( (this.now - start) / (end - start) ) * 100);
        },
    },
    methods:{
        modalHandler(){
            this.$modal.show('single-modal', {
                title : this.title,
                description : this.description,
                category : this.category,
                start : this.start,
                stop : this.stop,
                status : this.status
            });
        }
    }
}
</script>


