import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; 
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainpartComponent } from './mainpart/mainpart.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { MenWearComponent } from './men-wear/men-wear.component';
import { WomenWearComponent } from './women-wear/women-wear.component';
import { KidWearComponent } from './kid-wear/kid-wear.component';
import { DefaultproductsComponent } from './defaultproducts/defaultproducts.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';

// Define your routes here
const routes: Routes = [
  { path: '', component: DefaultproductsComponent }, 
  {
    path: 'products', 
    component: ProductsComponent, 
    children: [
      { path: 'men-wear', component: MenWearComponent },
      { path: 'women-wear', component: WomenWearComponent },
      { path: 'kid-wear', component: KidWearComponent }
    ]
  },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpartComponent,
    FooterComponent,
    ProductsComponent,
    MenWearComponent,
    WomenWearComponent,
    KidWearComponent,
    DefaultproductsComponent,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes), 
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
