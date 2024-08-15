import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductSubListComponent } from './product-Sub-listings/product-Sub-listings.component';
import { SubComponent } from './Sub/Sub.component';

const routes: Routes = [
  {
    path: 'products', component:ProductComponent,
    children: [
      { path: '',component: ProductSubListComponent},
      { path: ':subId',component: ProductListComponent,
        children: [

          // { path: ':productId',component: SubComponent}

          { path: '',component: SubComponent},
          { path: ':productId',component: ProductDetailComponent}
        ]
      }    
    ]
  }
];


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductSubListComponent,
    SubComponent
    ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
