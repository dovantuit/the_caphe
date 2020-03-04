import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  paymentInfo;

  ngOnInit() {
    this.getPaymentInfo();
  }

  getPaymentInfo() {
    this.apiService.get(`/items/get-by-menu-${16}`).then((data) => {
      this.paymentInfo = data[0];
    })
  }
}
