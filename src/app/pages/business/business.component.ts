import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../../services/utility.service';
import { ApiService } from '../../services/api.service';
import { Convert } from '../../services/convert.servics';
import { LoadingService } from '../../services/loading.service';
import { NotifyService } from '../../services/notify.service';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/';
  @ViewChild('openModal', { static: true }) openModal: ElementRef;
  @ViewChild('business', { static: true }) productsMore: ElementRef;
  selected: any;
  id;
  isSubmit: any;
  language;
  menus;
  items: any;
  firstItem: any;
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

  countSelect = 0;

  constructor(private activeRoute: ActivatedRoute, private notifyService: NotifyService, protected utility: UtilityService, private apiService: ApiService, private convert: Convert, private load: LoadingService) {
    this.id = this.activeRoute.snapshot.paramMap.get('text');
    this.userType = this.utility.getUser().userType
  }

  ngOnInit() {
    this.getMenus();

  }
  getMenus() {
    this.apiService.get(`/menu/get-by-topic-${3}`).then((data: any) => {
      this.menus = data;
      console.log(this.menus);
      if (this.menus) {
        if (this.id == 'trong-nuoc') {
          this.selectedMenu(this.menus[0]);
        } else if (this.id == 'ngoai-nuoc') {
          this.selectedMenu(this.menus[1]);
        } else {
          this.selectedMenu(this.menus[0]);
        }
      }

    })
  }


  selectedMenu(menu: any) {
    // console.log(this.countSelect)
    window.history.replaceState({}, '', `/doanh-nghiep/${this.convert.convertToSlug(menu.name)}`);
    this.selected = menu;
    this.menuId = menu.id;
    this.apiService.get(`/items/get-by-menu-${menu.id}`).then((data) => {
      this.items = data;
      // console.log(this.items);
      this.countSelect++
      if (this.items) {
        $.getScript('../../../../assets/js/owl-business.js');
      }

    })
    const scrollTop = this.productsMore.nativeElement.offsetTop + this.productsMore.nativeElement.clientHeight - 680
    if (this.countSelect >= 1) {
      window.scroll({
        top: scrollTop,
        left: 0,
        behavior: 'smooth'
      });
    }

  }

  formPost(text: string) {
    //console.log(text);

    this.type = text;
    if (text === 'Others' || text === 'Khác') {
      this.isHideType = false;
    } else {
      this.isHideType = true;
    }

  }

  onSubmit(data) {
    //console.log(data);

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
