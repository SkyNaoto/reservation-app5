import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  product:any;

  constructor(
    private route:ActivatedRoute,
    // private productService: productService,
    @Inject('DataService') private productService: any
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      // this.product = products[+params.get('productId')!]
      // this.product = this.productService.getProductById(params.get('productId')!)
      this.product = this.productService.getProductById(params.get('productId')!)
      // 多分ここに、MongoDBの時は subscribe してデータを格納する必要がある。ここはこれから追加作業が必要。コーズ110の5：50ぐらいから参照。
    })
  }

}
