import { Component, OnInit } from '@angular/core';

import { Board } from '../board/board';
import { BoardService } from '../board/board.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  boards: Board[];

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.getBoards();
  }

  getBoards(): void {
    this.boardService.getBoards().subscribe(data => this.boards = data);
  }

  addBoard(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.boardService.addBoard(name).subscribe(board => this.boards.push(board));
  }
}
