import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import { Task } from "./task.model"

@Injectable()

export class TaskService{

  public constructor(private http: Http){

  }

  public getTasks(): Promise<Task[]>{
    let promise = new Promise(function(resolve, reject){
      if(TASKS.length > 0){
        resolve(TASKS);
      }else{
        let error_msg = "Não há tarefas";
        reject(error_msg);
      }
    });
    return promise;
  }

  public getImportantTasks(): Promise<Task[]>{
    return Promise.resolve(TASKS.slice(0, 3));
  }

  public getTask(id: number): Promise<Task>{
    return this.getTasks()
      .then((tasks) => tasks.find(task => task.id === id))
  }
}
