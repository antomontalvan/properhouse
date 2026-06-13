import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.css'
})

export class CategoryFilter {

  @Output() categoryChanged = new EventEmitter<string>();

  categories = [
    'TODOS',
    'GROOMING',
    'ROPA',
    'GIFT CARDS'
  ];

  selectedCategory = 'TODOS';

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categoryChanged.emit(category);
  }
}