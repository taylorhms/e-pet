import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { PageParams } from 'src/app/models/page-params';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<T, ID> extends BaseService {

  abstract getBasePath(): string;

  findAll(pageParams: PageParams = {}): Observable<T[]> {
    return super.get<T[]>(this.getBasePath(), { params: pageParams });
  }

  findById(id: ID): Observable<T> {
    return super.get<T>(`${this.getBasePath()}/${id}`);
  }

  save(object: T): Observable<any> {
    return super.post<T>(this.getBasePath(), object);
  }

  update(id: ID, object: T): Observable<T> {
    return super.put<T>(`${this.getBasePath()}/${id}`, object);
  }
}
