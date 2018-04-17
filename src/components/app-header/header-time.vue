<template>
    <div class="row time-component">
            <div class="col-xl-3 col-md-6 col-12 time">
                <span class="hours">{{hours}}</span>
                <span class="minutes">{{minutes}}</span>
                <span class="seconds">{{seconds}}</span>
            </div>
            <div class="col-xl-8 col-md-6 col-12 date">
                <DateNow
                    :day="day"
                    :month="month"
                    :year="year"
                />
            </div>
    </div>
</template>

<script>
import DateNow from "./header-date"
export default {
    props : ['hours','minutes','seconds','day','month','year'],
    components:{
        DateNow
    }
}
</script>

