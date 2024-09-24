import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpartComponent } from 'src/app/mainpart/mainpart.component';
import { ProductsComponent } from 'src/app/products/products.component';
import { DefaultproductsComponent } from 'src/app/defaultproducts/defaultproducts.component';
import { MenWearComponent } from './men-wear/men-wear.component';
import { WomenWearComponent } from './women-wear/women-wear.component';
import { KidWearComponent } from './kid-wear/kid-wear.component';

const routes: Routes = [
  { path: "home", component: MainpartComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "products", component: ProductsComponent,
    children: [
      { path: "defaultproducts", component: DefaultproductsComponent },
      { path: "menWear", component: MenWearComponent },
      { path: "womenWear", component: WomenWearComponent },
      { path: "kidWear", component: KidWearComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
