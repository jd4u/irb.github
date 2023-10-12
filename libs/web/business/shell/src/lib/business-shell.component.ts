import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessLayoutComponent } from '@irbweb/ui/business-layout';

@Component({
  selector: 'irb-business-shell',
  standalone: true,
  imports: [
    CommonModule,
    BusinessLayoutComponent
  ],
  templateUrl: './business-shell.component.html',
  styleUrls: ['./business-shell.component.css'],
})
export class BusinessShellComponent {}
