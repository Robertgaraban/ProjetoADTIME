import { Task } from '../shared/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concat } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task: Task [] = [];
  delete: any;

  constructor(private http:HttpClient) { 

  }

  getAll() {
    // const list = window.localStorage.getItem('lista-tarefas');
    return this.http.get('http://localhost:3000/users')
    
    // if (list) {
    //   this.task = JSON.parse(list);
    // }
    // return this.task;
  }

  getById(id: number) {
    const task = this.task.find((value) => value.id == id);
    return task;
  }
  
  save(task: Task) {
    // if (task.id) {
    //   const taskArr = this.getById (task.id);
    //   taskArr.description = task.description;
    //   taskArr.completed = task.completed;
    // } else {
      // let lastId = 0;
      // if (this.task.length > 0) {
      //   lastId = this.task[this.task.length-1].id;
      // }

      // task.id = lastId + 1;
      // task.completed = false;
      // this.task.push(task);
      let tarefa : any = {};
      tarefa.tarefa = task.description;
      tarefa.name = '';
      return this.http.post('http://localhost:3000/users', tarefa);


      // let tarefa : any = {};
      // tarefa.tarefa = task.description;
      // tarefa.name = '';
      // return this.http.put('http://localhost:3000/users', tarefa)

    // }

    // window.localStorage.setItem('lista-tarefas', JSON.stringify(this.task));
    }

    // delete(id: number): {
    //   const taskIndex = this.task.findIndex((value) => value.id == id);
    //   this.task.splice(taskIndex, 1);
    //   window.localStorage.setItem('lista-tarefas', JSON.stringify(this.task));
    // }
      
  }

  

