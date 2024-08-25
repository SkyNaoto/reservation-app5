import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { productService } from './shared/product.service';
import { dataServiceFactory } from './shared/data.service.factory';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'products', component:ProductComponent,
    children: [
      { path: '',component: ProductListComponent},
      { path: ':productId',component: ProductDetailComponent}    
    ]
  }
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent
    ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ],
  providers: [
    {
      provide: 'DataService', //識別子をDataServiceとしてサービスを提供
      useFactory: dataServiceFactory,
      deps:[HttpClient]  
    }
  ],
  bootstrap: []
})
export class ProductModule { }
