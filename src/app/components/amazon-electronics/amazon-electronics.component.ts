import { Component } from '@angular/core';
import { ProductDetails } from 'src/app/contracts/product-details';
import { AmazonProductsService } from 'src/app/services/amazon-products.service';
@Component({
  selector: 'app-amazon-electronics',
  templateUrl: './amazon-electronics.component.html',
  styleUrls: ['./amazon-electronics.component.css']
})
export class AmazonElectronicsComponent {
  public Electronics:ProductDetails[] = [];
  constructor(private _serv:AmazonProductsService){}

  ngOnInit(){
    this._serv.GetProductByCategoryName("electronics")
    .subscribe(data=>{
      this.Electronics = data
    });
  }
}
