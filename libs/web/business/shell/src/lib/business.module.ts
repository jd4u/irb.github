import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { businessShellRoutes } from './lib.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(businessShellRoutes) ],
  exports: [],
  declarations: [],
  providers: [],
})
export class BusinessModule { }

