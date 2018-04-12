<template>
    <div class="col-lg-4 animated fadeIn">
        <div class="card">
            <div class="card-body">
                <p class="card-title">{{title}}</p>
                <p class="card-text">{{description}}</p>
                <p class="card-category">
                    <strong>Category</strong> : {{category}}
                </p>
                <a href="#" class="card-more" @click="showModal">More info</a>
                <Progress 
                    :progress="progressPersent" 
                    :state="changeProgressClass(progressPersent)"
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
        Progress
    },
    props: ['id', 'title', 'description', 'category', 'start', 'stop'],
    data(){
        return {
            progressPersent : 0,
        }
    },
    created(){
        EventBus.$on('get-second', this.progressVal);
    },
    methods:{

        showModal(e){
            e.preventDefault();
            this.$modal.show('single-task');
        },

        progressVal(val){
            const endTime = new Date(this.stop).getTime();
            const startTime = new Date(this.start).getTime();
            
            this.progressPersent =  Math.round( ( (val - startTime) / (endTime - startTime) ) * 100);
        },

        changeProgressClass(val){

            if (val >= 50 && val < 70) return "warning";
            
            if (val >= 70) return "danger";

            return "ok";

        }

    }
}
</script>


