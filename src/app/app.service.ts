import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http: HttpClient) { }
  public fetchData(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/posts`);
  }
}
