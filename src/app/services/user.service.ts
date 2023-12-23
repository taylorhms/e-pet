import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { CrudService } from './common/crud.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<User, number> {
  
  override getBasePath(): string {
    return '/user';
  }

}
