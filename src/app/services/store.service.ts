import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.mode';


const STORE_BASE_URL= 'https://pokeapi.co/api/v2/item';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit = '12', sort = 'desc'): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/item?sort=${sort}&limit=${limit}`)
  }
}
