import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { MaterialModule } from '@irbweb/material';

@Component({
  selector: 'irbweb-root-layout',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './root-layout.component.html',
  styleUrls: ['./root-layout.component.css'],
})
export class RootLayoutComponent {
  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
  ) {
    console.log(
      'RootLayoutComponent Constructor: AuthService.id:',
    );
  }
}
