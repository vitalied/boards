import { Component, OnInit, Input } from '@angular/core';

import { List } from './list';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  list: List;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void { }

  addTask(name: string): void {
    this.taskService.addTask(this.list.board_id, this.list.id, name).subscribe(task => this.list.tasks.push(task));
  }
}
