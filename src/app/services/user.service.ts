import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { CrudService } from './common/crud.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<User, number> {
  
  override getBasePath(): string {
    return '/user';
  }

  login(username: string, password: string): Observable<any> {
    return super.get('/user/login', { params: { username, password }, responseType: 'text' });
  }
}
