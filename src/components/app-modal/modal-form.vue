<template>
  <modal name="form-modal" :width="700" :height="`auto`" :minHeight="600" :adaptive="true" :scrollable="true">
        <form class="form-create-posts" @submit.prevent="submitHandler">
            <div class="modal-close" @click="$modal.hide('form-modal')">X</div>
            <p class="form-title">Create new task</p>
            <div class="form-group row">
                <label for="title-input" class="col-sm-4 col-form-label">Title</label>
                <div class="col-sm-8">
                    <input type="text" name="title-input" v-model="title" id="title-input">
                </div>
            </div>
            <div class="form-group row">
                <label for="select-category" class="col-sm-4 col-form-label">Select category</label>
                <div class="col-sm-8">
                    <select name="select-category" id="select-category" v-model="category">
                        <option value="Facebook hotfix">Facebook hotfix</option>
                        <option value="Exmo">Exmo</option>
                        <option value="Youtube">Youtube</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-4 col-form-label">Select date</label>
                <div class="col-sm-8">
                    <date-picker 
                        v-model="range" 
                        :range="true" 
                        :shortcuts="false" 
                        type="datetime" 
                        format="yyyy-MM-dd HH:mm:ss" 
                        lang="en"
                        :confirm="true">
                    </date-picker>
                </div>
            </div>
            <div class="form-group row">
                <label for="description-text" class="col-sm-4 col-form-label">Description</label>
                <div class="col-sm-8">
                    <textarea name="description-text" id="description-text" rows="8" v-model="description"></textarea>
                </div>
            </div>
            <div class="form-group">
                <button type="submit">Add task</button>
            </div>
        </form>
  </modal>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import {EventBus} from "../../helpers/event-bus.js"
export default {
    components:{
        DatePicker
    },
    data () {
        return {
            title: null,
            description: null,
            category: null,
            range: null,
        }
    },
    methods: {
        submitHandler(){
            if(this.title && this.description && this.category && this.range) {
                EventBus.$emit('create-new-task', {
                    title : this.title,
                    description : this.description,
                    category : this.category,
                    start : this.range[0],
                    stop : this.range[1],
                    completed : false
                });
                this.$modal.hide('form-modal');
            }
        }
    }
}
</script>