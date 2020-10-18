import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input()
  task: Task;
  @Output()
    deleted = new EventEmitter<boolean> ();
  
  constructor(private taskService: TaskService, private router: Router) { }
  
  ngOnInit() {
  }

  remove(task: Task) {
    console.log("resposta")
    this.taskService.delete(task.id).subscribe(resposta => {
    this.deleted.emit(true);
    this.router.navigate(['']);
    });
  }

  onCompletedCheckChange(task: Task) {
    this.taskService.save(task);
  }

}
