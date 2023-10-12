import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';


@Component({
  standalone: true,
  imports: [CommonModule],
  template: ` <p>404 Page not found</p> `,
  styles: [ ':host { @apply flex p-4; }' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {

  }
}
