import { Injectable } from '@angular/core';
import { CrudService } from './common/crud.service';
import { Role } from '../models/role';
import { Observable, of } from 'rxjs';
import { testData } from '../models/test-data';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends CrudService<Role, number> {
  
  override getBasePath(): string {
    return '/role';
  }

  override findAll(): Observable<Role[]> {
    return of(testData.roles);
  }
}
