import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CrudService } from './common/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService<Product, number> {
  
  override getBasePath(): string {
    return '/product';
  }

}
