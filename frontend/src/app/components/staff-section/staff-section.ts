import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { StaffCard } from '../staff-card/staff-card';

@Component({
  selector: 'app-staff-section',
  standalone: true,
  imports: [StaffCard],
  templateUrl: './staff-section.html',
  styleUrl: './staff-section.css',
})
export class StaffSection implements AfterViewInit {
  @ViewChild('carousel') carousel?: ElementRef<HTMLDivElement>;

  canScrollLeft = false;
  canScrollRight = false;

  staff = [
    {
      name: 'Carlos Mendez',
      username: '@carlosmendez',
      imageUrl:
        'https://images.unsplash.com/photo-1553521041-d168abd31de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxtYWxlJTIwYmFyYmVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgwNzAwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Diego Santos',
      username: '@diegosantos',
      imageUrl:
        'https://images.unsplash.com/photo-1578390432942-d323db577792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYWxlJTIwYmFyYmVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgwNzAwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Marco Rivera',
      username: '@marcorivera',
      imageUrl:
        'https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYWxlJTIwYmFyYmVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgwNzAwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Lucas Torres',
      username: '@lucastorres',
      imageUrl:
        'https://images.unsplash.com/photo-1543132220-3ec99c6094dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtYWxlJTIwYmFyYmVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgwNzAwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Bruno Castillo',
      username: '@brunocastillo',
      imageUrl:
        'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      name: 'Facundo Rojas',
      username: '@facurojas',
      imageUrl:
        'https://images.unsplash.com/photo-1605497788044-5a32c7078486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      name: 'Santiago Perez',
      username: '@santiperez',
      imageUrl:
        'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      name: 'Ivan Molina',
      username: '@ivanmolina',
      imageUrl:
        'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      name: 'Lautaro Medina',
      username: '@lautaromedina',
      imageUrl:
        'https://images.unsplash.com/photo-1582893561942-d61adcb2e534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      name: 'Emiliano Acosta',
      username: '@emiacosta',
      imageUrl:
        'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  ngAfterViewInit() {
    this.updateArrows();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateArrows();
  }

  scrollStaff(direction: 'left' | 'right') {
    const carousel = this.carousel?.nativeElement;

    if (!carousel) {
      return;
    }

    const card = carousel.querySelector<HTMLElement>('.staff-card-wrapper');
    const gap = 24;
    const scrollAmount = card ? card.offsetWidth + gap : 280;

    carousel.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  }

  updateArrows() {
    const carousel = this.carousel?.nativeElement;

    if (!carousel) {
      return;
    }

    const scrollLimit = carousel.scrollWidth - carousel.clientWidth;
    this.canScrollLeft = carousel.scrollLeft > 4;
    this.canScrollRight = carousel.scrollLeft < scrollLimit - 4;
  }
}
