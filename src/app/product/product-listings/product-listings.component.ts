import { Component } from '@angular/core';
import { productService } from '../shared/product.service';



@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent {

  products: any

  constructor(private productService: productService){

  }

  ngOnInit(){
    // this.products = this.productService.getProducts();
    const productObservable = this.productService.getProducts();
    productObservable.subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('エラーが発生しました: ' + err);
      },
      complete: () => {
        console.log('完了しました！');
      },
    });

    // コードの中での問題は、subscribeのコールバック関数内でthisが正しくバインドされていないことが原因です。JavaScriptの関数内でのthisは、デフォルトでその関数が呼び出されたコンテキスト（ここではsubscribe関数の中）にバインドされます。このため、this.productsが期待通りにProductListingsComponentのthisを指していません。
    // 修正方法
    // subscribeのコールバック関数でthisを正しくバインドするためには、以下のようにアロー関数を使用するか、functionではなくnextプロパティを使用する必要があります。
    //アロー関数を使う方法
    // アロー関数は自動的に外側のスコープのthisを継承するため、この場合に適しています。


    // productObservable.subscribe({
    //   next(data) {
    //     this.products = data;

    //     // console.log('次のデータが出力されました ' + data);
    //     // debugger
    //   },
    //   error(err) {
    //     console.error('エラーが発生しました: ' + err);
    //   },
    //   complete() {
    //     console.log('完了しました！');
    //   },
    // });

    // productObservable.subscribe(
      // (data) => {console.log('次のデータが出力されました ' + data)},
      // (err) => {console.error('エラーが発生しました: ' + err)},
      // () => {console.log('完了しました！')}
    // )

    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.error('エラー発生');
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // // debugger
    // console.log('just before subscribe');
    // // debugger
    // observable.subscribe({
    //   next(data) {
    //     console.log('次のデータが出力されました ' + data);
    //   },
    //   error(err) {
    //     console.error('エラーが発生しました: ' + err);
    //   },
    //   complete() {
    //     console.log('完了しました！');
    //   },
    // });
    // console.log('just after subscribe');



  }




}
