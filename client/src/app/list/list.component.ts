import { Component, OnInit, Input } from '@angular/core';

import { List } from './list';
import { TaskService } from '../task/task.service';

declare var jQuery: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  list: List;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.setupView();
  }

  setupView(): void {
    let component = this;
    setTimeout(() => {
      jQuery('.list-content').sortable({
        items: '.sortable-task',
        handle: '.task',
        connectWith: '.list-content',
        dropOnEmpty: true,
        placeholder: 'task-placeholder',
        tolerance: 'pointer',
        stop: (event, ui) => {
          let old_list_id = +ui.item.find('.task').attr('task-list-id');
          let new_list_id = +ui.item.parents('.list').attr('list-id');
          let prev_task_position = +ui.item.prev('.sortable-task').find('.task').attr('task-position') || 0;
          let current_task_position = +ui.item.find('.task').attr('task-position');
          let next_task_position = +ui.item.next('.sortable-task').find('.task').attr('task-position') || (component.list.tasks.length + 1) * 1000;
          let new_position = (prev_task_position + next_task_position) / 2;
          if (new_list_id !== old_list_id || new_position !== current_task_position) {
            component.updateTaskPosition(old_list_id, new_list_id, +ui.item.find('.task').attr('task-id'), new_position);
          }
        }
      }).disableSelection();
    }, 100);
  }

  addTask(name: string): void {
    this.taskService.addTask(this.list.board_id, this.list.id, name).subscribe(task => this.list.tasks.push(task));
  }

  updateTaskPosition(old_list_id: number, new_list_id: number, task_id: number, position: number): void {
    this.taskService.updateTaskPosition(this.list.board_id, old_list_id, new_list_id, task_id, position).subscribe(task => {
        let t = this.list.tasks.find(t => t.id == task.id);
        t.list_id = task.list_id;
        t.position = task.position;
      }
    );
  }
}
