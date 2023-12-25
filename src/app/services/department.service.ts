import { Injectable } from '@angular/core';
import { CrudService } from './common/crud.service';
import { Department } from '../models/department';
import { Observable, of } from 'rxjs';
import { testData } from '../models/test-data';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends CrudService<Department, number> {
  
  override getBasePath(): string {
    return '/department';
  }
  
  override findAll(): Observable<Department[]> {
    return of(testData.departments);
  }
}
