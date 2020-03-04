import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { ApiService } from '../../services/api.service';
import { NotifyService } from 'src/app/services/notify.service';
import { UtilityService } from 'src/app/services/utility.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactInfo: any = {};
  firstName;
  lastName;
  email;
  phone;
  comment;
  address;
  language;
  constructor(private apiService: ApiService, private notifyService: NotifyService, protected utility: UtilityService) {
    this.language = this.utility.getLanguage().toString();
  }

  ngOnInit() {
  }

  sendContact() {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (this.email &&
      this.comment &&
      this.firstName &&
      this.phone &&
      this.address) {
      if (EMAIL_REGEXP.test(this.email)) {

        const body = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          comment: this.comment,
          address: this.address,
        }
        this.apiService.post('/contact', body).then((data) => {
          if (data === 'Success') {
            if (this.language === 'vi') {
              this.notifyService.successPost('Gửi thành công');
            } else {
              this.notifyService.successPost('Send success');
            }
            this.email = '';
            this.comment = '';
            this.address = '';
            this.firstName = '';
            this.phone = '';
          }
          else {
            if (this.language === 'vi') {
              this.notifyService.error('Đã có lỗi xảy ra');
            } else {
              this.notifyService.error('Something wrong');
            }
          }
        })
      } else {

        if (this.language === 'vi') {
          this.notifyService.error('Email không đúng định dạng');
        } else {
          this.notifyService.error('Email not correct');
        }
      }
    } else {

      if (this.language === 'vi') {
        this.notifyService.error('Vui lòng điền đầy đủ thông tin');
      } else {
        this.notifyService.error('Please fill all information');
      }
    }
  }
}
