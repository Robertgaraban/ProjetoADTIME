import { Task } from '../shared/task';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task: Task [] = [];

  constructor() { }

  getAll() {
    const list = window.localStorage.getItem('lista-tarefas');
    if (list) {
      this.task = JSON.parse(list);
    }
    return this.task;
  }

  getById(id: number) {
    const task = this.task.find((value) => value.id == id);
    return task;
  }
  save(task: Task) {
    if (task.id) {
      const taskArr = this.getById (task.id);
      taskArr.description = task.description;
      taskArr.completed = task.completed;
    } else {
      let lastId = 0;
      if (this.task.length > 0) {
        lastId = this.task[this.task.length-1].id;
      }

      task.id = lastId + 1;
      task.completed = false;
      this.task.push(task);
    }

    window.localStorage.setItem('lista-tarefas', JSON.stringify(this.task));
    }

    delete(id: number) {
      const taskIndex = this.task.findIndex((value) => value.id == id);
      this.task.splice(taskIndex, 1);
      window.localStorage.setItem('lista-tarefas', JSON.stringify(this.task));
  }

  
}
