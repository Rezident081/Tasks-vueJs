<template>
  <modal name="single-modal" :width="700" :height="`auto`" :minHeight="600" :adaptive="true" :scrollable="true" @before-open="beforeOpen">
      <div class="single-modal">
          <h3 class="single-modal--title">{{title}}</h3>
          <p class="single-modal--description">{{description}}</p>
          <p class="single-modal--category"><strong>Task category :</strong> {{category}}</p>
          <p class="single-modal--status"><strong>Task status :</strong> {{status}}</p>
          <div class="row">
              <div class="col-md-6 single-modal--start"><strong>Task start:</strong> {{start}}</div>
              <div class="col-md-6 single-modal--stop"><strong>Task end:</strong> {{stop}}</div>
          </div>
      </div>
  </modal>
</template>

<script>
export default {
    data(){
        return {
            title : null,
            description : null,
            category : null,
            start : null,
            stop : null,
            status : null
        }
    },
    methods: {
        beforeOpen (event) {
            if(event.params.title)  this.title = event.params.title;
            if(event.params.description)  this.description = event.params.description;
            if(event.params.category)  this.category = event.params.category;
            if(event.params.start)  this.start = event.params.start;
            if(event.params.stop)  this.stop = event.params.stop;
            if(event.params.status)  this.status = event.params.status;
        }
    }
}
</script>
