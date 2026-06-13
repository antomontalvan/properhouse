import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../../../components/product-card/product-card';
import { Product } from '../../../../shared_models/product.model';

@Component({
  selector: 'app-products-grid',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.css'
})
export class ProductsGrid {

  @Input() products: Product[] = [];
}