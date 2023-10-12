import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@irbweb/material';
import { RootLayoutComponent } from '@irbweb/ui/root-layout';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  imports: [RouterModule, RootLayoutComponent, MaterialModule],
  selector: 'irbweb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'irbweb';

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {}
}
