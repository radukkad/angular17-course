import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { HeaderComponent } from "../../header/header.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  constructor(private tasksService: TasksService) {}
  
  completeTask() {
    //this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }
}
