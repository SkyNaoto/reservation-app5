import { Component } from '@angular/core';
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
    private productService: productService
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      // this.product = products[+params.get('productId')!]
      // this.product = this.productService.getProductById(params.get('productId')!)
      const productObservable = this.productService.getProductById(params.get('productId')!)
      productObservable.subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (err) => {
          console.error('エラーが発生しました: ' + err);
        },
        complete: () => {
          console.log('完了しました！');
        },
      })
    })
  }

}
