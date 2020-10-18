import { Task } from '../shared/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concat } from 'rxjs';
import { deleteUser } from '../../../controllers/index.controller';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  task: Task[] = [];

  constructor(private http: HttpClient) {}

  getAll() {
    // const list = window.localStorage.getItem('lista-tarefas');
    return this.http.get('http://localhost:3000/users');

    // if (list) {
    //   this.task = JSON.parse(list);
    // }
    // return this.task;
  }

  getById(id: number) {
    return this.http.get(`http://localhost:3000/users/${id}`);
    
  }

  save(task: Task) {
    if (task.id) {
      let tarefa: any = {};
      tarefa.tarefa = task.description;
      tarefa.name = '';
      return this.http.put(`http://localhost:3000/users/${task.id}`, tarefa);
    } else {
      let tarefa: any = {};
      tarefa.tarefa = task.description;
      tarefa.name = '';
      return this.http.post('http://localhost:3000/users', tarefa);
    }
  }
  delete(id: any) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
}
