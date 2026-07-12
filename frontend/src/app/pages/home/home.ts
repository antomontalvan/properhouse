import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { AboutSection } from '../../components/about-section/about-section';
import { ServicesSection } from '../../components/services-section/services-section';
import { StaffSection } from '../../components/staff-section/staff-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero, AboutSection, ServicesSection, StaffSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
