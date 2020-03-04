import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-recruitment-form',
  templateUrl: './recruitment-form.component.html',
  styleUrls: ['./recruitment-form.component.scss']
})
export class RecruitmentFormComponent implements OnInit {

  firstName;
  email;
  address;
  phoneNumber;
  comment;
  cvFile: File;
  fileName: any;
  constructor(private apiService: ApiService, private notifyService: NotifyService) { }

  ngOnInit() {
  }

  getCV(event) {
    switch (event.target.files[0].type) {
      case 'application/pdf':
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      case 'image/jpeg':
      case 'image/png':
        this.cvFile = event.target.files[0];
        this.fileName = event.target.files[0].name
        //console.log(this.fileName);

        break;
      default:
        this.notifyService.error("Không đúng định dạng");
        this.fileName = '';
        break;
    }
  }

  apply() {
    if (this.email
      && this.firstName
      && this.phoneNumber
      && this.address
      && this.fileName
      && this.comment
    ) {
      const body = {
        firstName: this.firstName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        address: this.address,
        cvFile: this.fileName,
        comment: this.comment,
      }
      this.apiService.postCV('/recruitment/create', body, this.cvFile).then((data) => {
        if (data !== 'Success') {
          this.notifyService.error('Đã có lỗi xảy ra');
        }
        else {
          this.notifyService.successPost('Gửi thành công');
          this.email = '';
          this.firstName = '';
          this.phoneNumber = '';
          this.address = '';
          this.fileName = '';
          this.comment = '';
        }
      })
    } else {
      this.notifyService.error('Vui lòng điền đầy đủ thông tin');
    }
  }

}
