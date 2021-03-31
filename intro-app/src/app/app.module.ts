import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { dashboard } from './dashboard/dashboard.component';
import { ProductList } from './product/product-list.component';
import {ConvertToSpace} from './shared/pipes/convertToSpace.pipe'


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    dashboard,
    ProductList,
    ConvertToSpace
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
