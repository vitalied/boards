import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Board } from './board';
import { BoardService } from './board.service';
import { ListService } from '../list/list.service';

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
    this.boardService.getBoard(id).subscribe(board => this.board = board);
  }

  addList(name: string): void {
    this.listService.addList(this.board.id, name).subscribe(list => this.board.lists.push(list));
  }
}