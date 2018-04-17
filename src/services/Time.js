export default class Time {
    constructor(){
        this.now = new Date();
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }

    getSeconds(){
        return this.setTwoDigids(this.now.getSeconds());
    }

    getMinutes(){
        return this.setTwoDigids(this.now.getMinutes());
    }

    getHours(){
        return this.setTwoDigids(this.now.getHours());
    }

    getDays(){
        return this.now.getDate();
    }

    getMonths(){
        return this.months[this.now.getMonth()];
    }

    getYears(){
        return this.now.getFullYear();
    }

    getMilliseconds(){
        return this.now.getTime();
    }

    setTwoDigids(val){
        if(val.toString().length <= 1){
            return "0" + val.toString();
        }
        return val.toString();
    }

}