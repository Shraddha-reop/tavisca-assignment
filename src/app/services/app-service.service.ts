import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor(public http: HttpClient) { }

  public fetchLinks(): Observable<any> {
    console.log("service");
    return this.http.get<any>(`http://localhost:3000/posts`);
  }

  public addLinks(requestBody): Observable<any> {
    console.log(requestBody);
    return this.http.post<any>(`http://localhost:3000/posts`, requestBody);
  }

  public deleteLink(id): Observable<any> {
    console.log(id);
    console.log(`http://localhost:3000/posts/${id}`);
    return this.http.delete<any>(`http://localhost:3000/posts/${id}`);
  }

  public updateLink(id,requestBody): Observable<any> {
    console.log(id,requestBody,"update link");
    return this.http.patch<any>(`http://localhost:3000/posts/${id}`,requestBody);
  }
}
