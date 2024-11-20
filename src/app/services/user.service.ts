import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  getUsers(count: number = 10): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.apiUrl}?results=${count}`);
  }
}
