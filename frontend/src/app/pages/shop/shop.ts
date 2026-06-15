import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarShop } from './components/navbar-shop/navbar-shop';
import { CategoryFilter } from './components/category-filter/category-filter';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductsGrid } from './components/products-grid/products-grid';

import { Category, PRODUCTS } from '../../shared_models/product.model';
/*import { ProductDetail } from '../../components/product-detail/product-detail';
import { PRODUCTS, Category } from '../../shared_models/product.model';*/

//const CATEGORIES: string[] = ['TODOS', 'GROOMING', 'ROPA', 'GIFT CARDS'];

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, NavbarShop, CategoryFilter, ProductsGrid], // ProductDetail
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})

export class Shop {

  selectedCategory = signal<Category>('TODOS');

  onCategoryChange(category: string) {

    this.selectedCategory.set(
      category as Category
    );
  }

  get filteredProducts() {

    const category = this.selectedCategory();

    if (category === 'TODOS') {
      return PRODUCTS;
    }

    return PRODUCTS.filter(
      product => product.category === category
    );
  }
  /*categories = CATEGORIES;
  selectedCategory = signal<Category>('TODOS');
  selectedProductId = signal<string | null>(null);

  get filteredProducts() {
    const cat = this.selectedCategory();
    return cat === 'TODOS' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
  }*/
}