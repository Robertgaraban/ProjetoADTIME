import { TaskService } from './../shared/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import router from '../../../routes';
import { Route } from '@angular/compiler/src/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any= [];
  mySubscription: any;
  

  constructor(private taskService: TaskService, private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
      this.router.navigated = false;
      }
    });
  }

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

  ngOnDestroy() {
    if (this.mySubscription) {
        this.mySubscription.unsubscribe();
    }
  }

  onDeleted() {
    this.taskService.getAll().subscribe(tasks => {
    this.tasks = tasks
    });
  }

}