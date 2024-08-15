import { Component } from '@angular/core';
import { types } from 'src/app/types';

@Component({
  selector: 'app-product-sub-listings',
  templateUrl: './product-Sub-listings.component.html',
  styleUrls: ['./product-Sub-listings.component.scss']
})
export class ProductSubListComponent {

  types: any

  ngOnInit(){
    this.types = types;
  }




}
