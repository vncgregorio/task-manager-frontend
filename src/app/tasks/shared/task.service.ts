import { Injectable } from "@angular/core";

import { Task } from "./task.model"

const TASKS: Array<Task> = [
  {
    id: 1,
    title: 'Fazer tarefa 1'
  },
  {
    id: 2,
    title: 'Fazer tarefa 2'
  },
  {
    id: 3,
    title: 'Fazer tarefa 3'
  },
  {
    id: 4,
    title: 'Fazer tarefa 4'
  },
  {
    id: 5,
    title: 'Fazer tarefa 5'
  },
  {
    id: 6,
    title: 'Fazer tarefa 6'
  },
  {
    id: 7,
    title: 'Fazer tarefa 7'
  }
];
// const TASKS2: any[] = []

@Injectable()

export class TaskService{

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

}
