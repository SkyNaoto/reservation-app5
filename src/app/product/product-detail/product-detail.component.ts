import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  product:any;

  constructor(private route:ActivatedRoute){}

  // isDetailView(): boolean {
  //   return this.route.snapshot.children.length > 0;
  // }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')!]
      console.log('params:', params);
    })
  }

}
