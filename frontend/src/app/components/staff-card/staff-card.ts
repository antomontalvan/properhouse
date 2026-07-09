import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-staff-card',
  standalone: true,
  imports: [],
  templateUrl: './staff-card.html',
  styleUrl: './staff-card.css',
})
export class StaffCard {
  @Input()
  name = '';

  @Input()
  username = '';

  @Input()
  imageUrl = '';
}
