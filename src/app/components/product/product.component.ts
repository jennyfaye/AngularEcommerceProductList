import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  productList: ProductModel[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productList = this.productService.getProduct();
  }
}
