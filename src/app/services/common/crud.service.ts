import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { PageParams } from 'src/app/models/page-params';
import { Observable } from 'rxjs';
import { Page } from 'src/app/models/page';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<T, ID> extends BaseService {

  abstract getBasePath(): string;

  findAll(): Observable<T[]> {
    return super.get<T[]>(`${this.getBasePath()}/list`);
  }

  findAllPage(pageParams: PageParams = {}): Observable<Page<T>> {
    return super.get<Page<T>>(this.getBasePath(), { params: pageParams });
  }

  findById(id: ID): Observable<T> {
    return super.get<T>(`${this.getBasePath()}/${id}`);
  }

  save(object: T | any): Observable<any> {
    return super.post<T>(this.getBasePath(), object);
  }

  update(id: ID, object: T | any): Observable<T> {
    return super.put<T>(`${this.getBasePath()}/${id}`, object);
  }
}
