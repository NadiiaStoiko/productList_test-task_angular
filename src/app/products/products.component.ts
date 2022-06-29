import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/assets/product.interface';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  displayedColumnsRight: string[] = ['ColorIdx','ProductDescription','Price','VoDatum','IsHeavy','RestrictedLands','IsFsk','IsOrdergruppeC'];
  public products: Product[]| undefined  = [];
  public activeProduct : any;
  public dataSource: any;
  public dataSorsceRight: Product[] = [];
  public isActiveItem: boolean = false;
  public isOpenPropertiesBlock:boolean = true;
  public id:number | undefined;

  constructor(private prodServ: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.isOpenPropertiesBlock = true;
  }

  public getProducts() {
   this.prodServ.getProducts()
    .subscribe((data:Product[]) => {
      this.products = data;
      this.dataSource = this.products as any;
    });
  }

  public makeItemActive (id: number) {
    this.isActiveItem = true;
    this.isOpenPropertiesBlock = true;
    this.activeProduct = this.products?.find(item => item.ProductId === id);

    for( let key in this.activeProduct ) {
      if ( this.activeProduct[key] === null ) {
        this.activeProduct[key]='undefined'
      }
    }
    this.dataSorsceRight = [];
    this.dataSorsceRight.push(this.activeProduct);
  }

  public closePropertiesBlock() {
    this.isOpenPropertiesBlock = false;
  }
}
