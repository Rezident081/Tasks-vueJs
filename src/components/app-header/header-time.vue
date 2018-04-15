<template>
    <div class="row time-component">
            <div class="col-xl-2 col-lg-3 time">
                <span class="hours">{{hours}}</span>
                <span class="minutes">{{minutes}}</span>
                <span class="seconds">{{seconds}}</span>
            </div>
            <div class="col-xl-10 col-lg-9 date">
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

