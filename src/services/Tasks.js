import tasks from "../models/tasks.json";

export default class Tasks {
    constructor(){
        this.tasks = tasks;
    }

    getEndTasks(now){
        return this.tasks.filter( el => {
            const stop = new Date(el.stop).getTime();
            if(now > stop) el.isActive = false;

            return !el.isActive;
        });
    }

    getProgressTasks(now){
        return this.tasks.filter( el => {
            const stop = new Date(el.stop).getTime();
            const start = new Date(el.start).getTime();

            return now >= start && now < stop && el.isActive;
        });
    }

    getPublishTasks(now){
        return this.tasks.filter( el => {
            const stop = new Date(el.stop).getTime();

            return now < stop && el.isActive;
        });
    }

    addTask(obj){
        obj = Object.assign(obj, { id: this.tasks.length + 1 })
        this.tasks.push(obj);
    }

    moveToCancel(id){
        for(let i = 0, n = this.tasks.length; i < n; i++){
            if( this.tasks[i].id === id ) this.tasks[i].isActive = false;
        }
    }

    deleteEndTasks(){
        let i = this.tasks.length;
        while(i--){
            if(!this.tasks[i].isActive){
                this.tasks.pop();
            }
        }
    }
    
}
