import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@irbweb/material';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

export type LinkItem = {
  name: string;
  link: string;
  index: number;
};

@Component({
  selector: 'irbms-business-layout',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterOutlet, RouterModule],
  templateUrl: './business-layout.component.html',
  styleUrls: ['./business-layout.component.css'],
})
export class BusinessLayoutComponent {
  protected links: LinkItem[] = [
    { name: 'Contacts', link: 'contacts', index: 0 },
    { name: 'Teams', link: 'teams', index: 1 },
    { name: 'Projects', link: 'projects', index: 2 },
  ];
  // protected activeLink = signal<string>('');
}
