import { Injectable } from '@angular/core';
import { Service } from '../models/service';
import { CrudService } from './common/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends CrudService<Service, number> {
  
  override getBasePath(): string {
    return '/service';
  }

}
