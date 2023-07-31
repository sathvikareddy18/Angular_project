import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from 'src/app/contracts/product-details';
import { AmazonProductsService } from 'src/app/services/amazon-products.service';

@Component({
  selector: 'app-amazon-more-details',
  templateUrl: './amazon-more-details.component.html',
  styleUrls: ['./amazon-more-details.component.css']
})
export class AmazonMoreDetailsComponent {
  public product:ProductDetails = {
    id:0,
    category:'',
    description:'',
    image:'',
    price:0,
    rating:{
      count:0,
      rate:0
    },
    title:''
  };
  public id:any = '';
  constructor(private _route:ActivatedRoute,private _serv:AmazonProductsService){}
  ngOnInit(){
    this.id = this._route.snapshot.paramMap.get('productId');
    this._serv.GetProductById(this.id).subscribe(data=>this.product = data);
  }
}
