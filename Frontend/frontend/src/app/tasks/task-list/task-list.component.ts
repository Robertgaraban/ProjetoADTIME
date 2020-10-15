import { TaskService } from './../shared/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any= [];

  constructor(private taskService: TaskService) { }

  
  ngAfterViewInit() {
    
    this.taskService.getAll().subscribe(tasks => {
      this.tasks = tasks
    });
  }
  
  ngOnInit() {
    
  this.taskService.getAll().subscribe(tasks => {
       this.tasks = tasks
     });

  

  }

}
