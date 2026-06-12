import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarShop } from './components/navbar-shop/navbar-shop';
/*import { ProductCard } from '../../components/product-card/product-card';
import { ProductDetail } from '../../components/product-detail/product-detail';
import { PRODUCTS, Category } from '../../shared_models/product.model';*/

const CATEGORIES: string[] = ['TODOS', 'GROOMING', 'ROPA', 'GIFT CARDS'];

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, NavbarShop], //ProductCard, ProductDetail
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})

export class Shop {
  /*categories = CATEGORIES;
  selectedCategory = signal<Category>('TODOS');
  selectedProductId = signal<string | null>(null);

  get filteredProducts() {
    const cat = this.selectedCategory();
    return cat === 'TODOS' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
  }*/
}