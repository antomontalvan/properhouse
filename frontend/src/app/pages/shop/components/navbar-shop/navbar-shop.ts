import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-shop.html',
  styleUrl: './navbar-shop.css'
})
export class NavbarShop {

  menuOpen = false;
  userMenuOpen = false;
  isLoggedIn = false;

  currentPage = 'shop';

  navLinks = [
    { label: 'TIENDA', page: 'shop' },
    { label: 'NOSOTROS', page: 'nosotros' },
    { label: 'GIFT CARDS', page: 'giftcard' }
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleUserMenu(): void {
    this.userMenuOpen = !this.userMenuOpen;
  }

  login(): void {
    this.isLoggedIn = true;
    this.userMenuOpen = false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userMenuOpen = false;
  }

  openCart(): void {
    console.log('Abrir carrito');
  }

  navigate(page: string): void {
    this.currentPage = page;
  }

  @HostListener('document:click')
  closeMenus(): void {
    // opcional para cerrar dropdown al clickear afuera
  }
}