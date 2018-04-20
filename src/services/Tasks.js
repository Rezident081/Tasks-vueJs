import tasks from "../models/tasks.json";

export default class Tasks {
    constructor(){
        this.tasks = tasks;
    }

    getTaks(now){
        return this.tasks.map( el => {
            const stop = new Date( el.stop ).getTime();
            const start = new Date( el.start ).getTime();
            this.setStatus(el, start, stop, now);
            return el;
        });
    }

    setStatus(el, start, stop, now){
        if( now < start ) el.status = 'Publish';
        if( now >= start && now < stop) el.status = 'In progress';
        if( !el.isActive || now >= stop ){
            el.status = 'Ended';
        }
    }

    addTask(obj){
        obj = Object.assign(obj, { id: this.tasks.length + 1 })
        this.tasks.push(obj);
    }

    moveToTrash(id){
        this.tasks = this.tasks.map( el => {
            if(el.id === id) el.isActive = false;
            return el;
        })
    }

    removeNotActive(){
        this.tasks = this.tasks.filter( el => {
            return el.status !== 'Ended';
        });
    }
    
}
