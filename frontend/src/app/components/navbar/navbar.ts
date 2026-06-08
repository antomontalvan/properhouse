import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  activeLink: string | null = null;

  navLinks: string[] = ['Servicios', 'Productos', 'Comunidad', 'Staff', 'Contacto'];

  handleLinkClick(link: string): void {
    this.activeLink = link;

    const element = document.getElementById(link.toLowerCase());

    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handleLogoClick(): void {
    const element = document.getElementById('nosotros');

    if(element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  handleBookingClick(): void {
    const element = document.getElementById('turnos');

    if(element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  handleCartClick(): void {
    console.log('Abrir carrito');
  }
}
