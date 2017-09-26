import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Task } from './task';

@Injectable()
export class TaskService {
  private apiUrl = 'http://127.0.0.1:3000/api/boards';  // URL to web api
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _http: HttpClient) { }

  addTask(board_id: number, list_id: number, name: string) {
    const url = `${this.apiUrl}/${board_id}/lists/${list_id}/tasks`;
    return this._http.post<Task>(url, { task: { name: name } }, { headers: this.headers });
  }
}
