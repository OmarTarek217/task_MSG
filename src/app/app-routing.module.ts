import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpartComponent } from 'src/app/mainpart/mainpart.component';
import { ProductsComponent } from 'src/app/products/products.component';
// import { DefaultProductsComponent } from './Products/default-products/default-products.component';
// import { MenWearComponent } from './Products/men-wear/men-wear.component';
// import { WomenWearComponent } from './Products/women-wear/women-wear.component';
// import { KidWearComponent } from './Products/kid-wear/kid-wear.component';

const routes: Routes = [
  { path: "home", component: MainpartComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "products", component: ProductsComponent,
    // children: [
    //   { path: "", component: DefaultProductsComponent },
    //   { path: "menWear", component: MenWearComponent },
    //   { path: "womenWear", component: WomenWearComponent },
    //   { path: "kidWear", component: KidWearComponent }
    // ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
