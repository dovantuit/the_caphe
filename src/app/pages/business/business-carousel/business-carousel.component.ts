import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NotifyService } from 'src/app/services/notify.service';
import { UtilityService } from 'src/app/services/utility.service';
@Component({
  selector: 'business-carousel',
  templateUrl: './business-carousel.component.html',
  styleUrls: ['./business-carousel.component.scss']
})
export class BusinessCarouselComponent implements OnInit {
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  @Input() display: any;
  @Input() isSubmit: any;
  menuId;

  contactInfo: any = {};
  fromPost: any;
  firstName;
  lastName;
  email;
  phone;
  address;
  monthlyWeight;
  type;
  emailExist;
  company;
  comment;

  isHideType = true;

  // isSubmit = false;
  userType;

  @ViewChild('openModal', { static: true }) openModal: ElementRef;
  constructor(private apiService: ApiService, private notifyService: NotifyService, protected utility: UtilityService) {
    this.userType = this.utility.getUser().userType
    // console.log(this.display.id);
    // this.apiService.get(`/items/get-by-menu-${this.menuId}`).then((data: any) => {
    //   this.items=data;
    //   console.log(this.items);
    // })
  }

  ngOnInit() {
  }

  formPost(text: string) {
    //console.log(text);
    
    this.type = text;
    if (text === 'Others') {
      this.isHideType = false;
    } else{
      this.isHideType = true;
    }
    
  }

  onSubmit(data) {
    this.isSubmit = true;
    if (data.status === "VALID") {
      const body = data.value;
        this.apiService.post('/customer/create', body).then((data) => {
          if (data === 'Success') {
            this.notifyService.successPost('Thành công');
            this.openModal.nativeElement.click();
            this.isSubmit = false;
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.phone = '';
            this.company = '',
            this.address = '';
            this.monthlyWeight = '';
            this.type = this.userType ? this.userType : "";
            this.fromPost = '';
            this.comment = '';
            this.emailExist = '';
            
          } else if (data === 'Email đã tồn tại') {
            this.notifyService.error('Email đã tồn tại');
            this.emailExist = this.email;
          } else this.notifyService.error('Đã có lỗi xảy ra!');
        })
    }

  }

}

