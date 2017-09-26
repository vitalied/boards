import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Board } from './board';

@Injectable()
export class BoardService {
  private apiUrl = 'http://127.0.0.1:3000/api/boards';  // URL to web api
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _http: HttpClient) { }

  getBoards() {
    return this._http.get<Board[]>(this.apiUrl, { headers: this.headers });
  }

  getBoard(id: number) {
    return this._http.get<Board>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }

  addBoard(name: string) {
    return this._http.post<Board>(this.apiUrl, { board: { name: name } }, { headers: this.headers });
  }
}
