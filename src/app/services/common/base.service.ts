import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  get<T>(path: string, options?: object): Observable<T> {
    return this.http.get<T>(`${environment.api.url}${path}`, options);
  }

  post<T>(path: string, body: any, options?: object): Observable<T> {
    return this.http.post<T>(`${environment.api.url}${path}`, body, options);
  }

  put<T>(path: string, body: any, options?: object): Observable<T> {
    return this.http.put<T>(`${environment.api.url}${path}`, body, options);
  }

  delete<T>(path: string, options?: object): Observable<T> {
    return this.http.delete<T>(`${environment.api.url}${path}`, options);
  }
}
