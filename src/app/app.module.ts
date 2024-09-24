import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainpartComponent } from './mainpart/mainpart.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { MenWearComponent } from './men-wear/men-wear.component';
import { WomenWearComponent } from './women-wear/women-wear.component';
import { KidWearComponent } from './kid-wear/kid-wear.component';
import { DefaultproductsComponent } from './defaultproducts/defaultproducts.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
