import { Injectable } from '@angular/core';
import { CrudService } from './common/crud.service';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends CrudService<Department, number> {
  
  override getBasePath(): string {
    return '/department';
  }

}
