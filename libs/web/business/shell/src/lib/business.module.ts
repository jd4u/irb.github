import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { businessShellRoutes } from './lib.routes';

@NgModule({
  imports: [ BrowserModule, RouterModule.forChild(businessShellRoutes) ],
  exports: [],
  declarations: [],
  providers: [],
})
export class BusinessModule { }

