import { Component } from '@angular/core';
import { AboutSection } from '../about-section/about-section';
import { ContactSection } from '../contact-section/contact-section';

@Component({
  selector: 'app-about-us-section',
  imports: [AboutSection, ContactSection],
  templateUrl: './about-us-section.html',
  styleUrl: './about-us-section.css',
})
export class AboutUsSection {}
