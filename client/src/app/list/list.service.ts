import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { List } from './list';

@Injectable()
export class ListService {
  private apiUrl = 'http://127.0.0.1:3000/api/boards';  // URL to web api
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _http: HttpClient) { }

  addList(board_id: number, name: string) {
    const url = `${this.apiUrl}/${board_id}/lists`;
    return this._http.post<List>(url, { list: { name: name } }, { headers: this.headers });
  }
}
