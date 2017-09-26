import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Board } from './board';
import { BoardService } from './board.service';
import { ListService } from '../list/list.service';

declare var jQuery: any;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Board;

  constructor(
    private boardService: BoardService,
    private listService: ListService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBoard(this._route.snapshot.params.id);
  }

  getBoard(id: number): void {
    this.boardService.getBoard(id).subscribe(board => {
      this.board = board;
      this.setupView();
    });
  }

  setupView(): void {
    let component = this;
    setTimeout(() => {
      jQuery('.board-content').sortable({
        items: '.sortable-list',
        handle: '.list-name',
        placeholder: 'list-placeholder',
        tolerance: 'pointer',
        start: (event, ui) => {
          ui.placeholder.height(ui.item.outerHeight());
        },
        stop: (event, ui) => {
          let prev_list_position = +ui.item.prev('.sortable-list').find('.list').attr('list-position') || 0;
          let current_list_position = +ui.item.find('.list').attr('list-position');
          let next_list_position = +ui.item.next('.sortable-list').find('.list').attr('list-position') || (component.board.lists.length + 1) * 1000;
          let new_position = (prev_list_position + next_list_position) / 2;
          if (new_position !== current_list_position) {
            component.updateListPosition(+ui.item.find('.list').attr('list-id'), new_position);
          }
        }
      }).disableSelection();
    }, 100);
  }

  addList(name: string): void {
    this.listService.addList(this.board.id, name).subscribe(list => this.board.lists.push(list));
  }

  updateListPosition(list_id: number, position: number): void {
    this.listService.updateListPosition(this.board.id, list_id, position).subscribe(
      list => this.board.lists.find(l => l.id == list.id).position = list.position
    );
  }
}
