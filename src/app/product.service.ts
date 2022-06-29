import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/assets/product.interface';



@Injectable({
  providedIn: 'root'
})

export class ProductService {

public product:any;

  constructor( private http: HttpClient ) { }

  public getProducts() {
    return this.http.get<Product[]>('assets/DATA.json');
  }
}
