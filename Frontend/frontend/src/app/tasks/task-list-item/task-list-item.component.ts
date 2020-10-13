import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private taskService: TaskService) { }
  
  ngOnInit() {
  }

  remove(task: Task) {
    this.taskService.delete(task.id);
  }

  onCompletedCheckChange(task: Task) {
    this.taskService.save(task);
  }

}
