import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }
}