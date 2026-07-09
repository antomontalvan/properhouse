import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {
  @Input() title: string = '';
  @Input() price: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
}
