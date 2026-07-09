import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ServiceCard } from '../service-card/service-card';

@Component({
  selector: 'app-services-section',
  imports: [ServiceCard],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css',
})
export class ServicesSection implements AfterViewInit {
  @ViewChild('carousel') carousel?: ElementRef<HTMLDivElement>;

  canScrollLeft = false;
  canScrollRight = false;

  services = [
    {
      title: 'Corte Clásico',
      price: '$22.000',
      description: 'Corte tradicional con terminaciones precisas y asesoramiento profesional.',
      imageUrl: 'https://images.unsplash.com/photo-1759142449398-89357aa1bb36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxiYXJiZXJzaG9wJTIwaW50ZXJpb3IlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzgwNzAwMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Fade Premium',
      price: '$25.000',
      description: 'Degradado moderno con detalles personalizados según tu estilo.',
      imageUrl: 'https://images.unsplash.com/photo-1693755807658-17ce5331aacb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtYWxlJTIwYmFyYmVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgwNzAwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Barba + Corte',
      price: '$30.000',
      description: 'Experiencia completa con perfilado de barba y corte profesional.',
      imageUrl: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3IlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzgwNzAwMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Cabello Largo',
      price: '$33.000',
      description: 'Corte tradicional con terminaciones precisas y asesoramiento profesional en cabellos largos.',
      imageUrl: 'https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYmFyYmVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgwNzAwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Barba',
      price: '$18.000',
      description: 'Perfilado y arreglo de barba con toalla caliente.',
      imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      title: 'Color',
      price: '$28.000',
      description: 'Coloración y matizado con diagnóstico previo para cuidar el cabello.',
      imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    }
  ];

  ngAfterViewInit() {
    this.updateArrows();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateArrows();
  }

  scrollServices(direction: 'left' | 'right') {
    const carousel = this.carousel?.nativeElement;

    if (!carousel) {
      return;
    }

    const card = carousel.querySelector<HTMLElement>('.service-card-wrapper');
    const gap = 24;
    const scrollAmount = card ? card.offsetWidth + gap : 344;

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
