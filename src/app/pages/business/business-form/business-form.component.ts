import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss']
})
export class BusinessFormComponent implements OnInit {
  firstName;
  lastName;
  email;
  phoneNumber;
  company;
  address;
  expectedMontly;
  customerType;
  emailExist;
  constructor(private apiService: ApiService, private notifyService: NotifyService) { }

  ngOnInit() {
  }

  submit() {
    if (this.firstName &&
      this.lastName &&
      this.email &&
      this.phoneNumber &&
      this.address &&
      this.company &&
      this.expectedMontly &&
      this.customerType) {
      const body = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        company:this.company,
        address: this.address,
        expectedMontly: this.expectedMontly,
        customerType: this.customerType

      }
      if (this.emailExist !== this.email) {
        this.apiService.post('/customer/create', body).then((data) => {
          if (data === 'Success') {
            this.notifyService.successPost('Thành công');
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.company = '';
            this.phoneNumber = '';
            this.address = '';
            this.expectedMontly = '';
            this.customerType = '';
           
          } if (data !== 'Email đã tồn tại') {
            this.notifyService.error('Email đã tồn tại');
            this.emailExist = this.email;
          } else {
            this.notifyService.error('Đã có lỗi xảy ra!');
          }
        })
      } else {
        this.notifyService.error('Email đã tồn tại');
      }
    } else {
      this.notifyService.error('Vui lòng điền đầy đủ thông tin');
    }
  }
}
