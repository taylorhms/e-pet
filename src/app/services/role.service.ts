import { Injectable } from '@angular/core';
import { CrudService } from './common/crud.service';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends CrudService<Role, number> {
  
  override getBasePath(): string {
    return '/role';
  }

}
