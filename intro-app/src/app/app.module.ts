import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product/product-list.component';
import { ConvertToSpace } from './shared/pipes/convertToSpace.pipe';
import { RatingComponent } from './rating/rating.component';

import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleCardComponent } from './articles/article-card/article-card.component'


@NgModule({
  declarations: [
    ConvertToSpace,
    HomeComponent,
    AppComponent,
    AccountComponent,
    dashboardComponent,
    ProductListComponent,
    RatingComponent,
   
    PageNotFoundComponent,
    NavigationComponent,
    ArticlesComponent,
    ArticleCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'dashboard',
        component: dashboardComponent,
      },
      {
        path: 'account',
        component: AccountComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      }
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
