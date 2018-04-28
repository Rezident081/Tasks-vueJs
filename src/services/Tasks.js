import tasks from "../models/tasks.json";

export default class Tasks {
    constructor(){
        this.tasks = tasks;
    }

    getTaks(){
        return this.tasks;
    }

    addTask(obj){
        obj = Object.assign(obj, { id: this.tasks.length + 1 })
        this.tasks.push(obj);
    }
    

    removeTask(id){
        const item = this.tasks.find( el => 
            el.id === id
        )
        item.completed = true;
    }

    removeAllCompletedTasks(){
        // this.tasks = this.tasks.filter(el => {
        //     return !el.completed;
        // })
        // console.log(this.tasks);
    }
    
}
