import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/Products.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$!: Observable<Product[]>;

  constructor(private serviceProduct: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.serviceProduct.getProducts();
  }

}
