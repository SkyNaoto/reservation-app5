import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  data: any[] = [];

  constructor(@Inject('DataService') private dataService: any) { }

  ngOnInit() {
    const data = this.dataService.getProducts();
    if (data instanceof Observable) {
      data.subscribe(response => this.data = response);
    } else {
      this.data = data;
    }
  }
}
