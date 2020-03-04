import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-shipping-return',
  templateUrl: './shipping-return.component.html',
  styleUrls: ['./shipping-return.component.scss']
})
export class ShippingReturnComponent implements OnInit {


  constructor(private apiService: ApiService) { }
  shippingInfo

  ngOnInit() {
    this.getShippingInfo();
  }

  getShippingInfo() {
    this.apiService.get(`/items/get-by-menu-${15}`).then((data) => {
      this.shippingInfo = data[0];

    })
  }

}
