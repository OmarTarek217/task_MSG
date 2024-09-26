import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/product.service';
import * as ngxOwlCarouselO from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-men-wear',
  templateUrl: './men-wear.component.html',
  styleUrls: ['./men-wear.component.css']
})
export class MenWearComponent implements OnInit {
constructor(private service:ProductsService){}
products:any
ngOnInit(): void {
  this.service.productsCategory().subscribe({
    next:(response)=>{
      console.log(response.data);
      this.products=response.data
    }
  })
}
customOptions: ngxOwlCarouselO.OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}
}