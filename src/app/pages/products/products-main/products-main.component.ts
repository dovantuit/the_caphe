import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { ApiService } from 'src/app/services/api.service';
import { DateFormatter } from 'ngx-bootstrap/datepicker/public_api';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.scss']
})
export class ProductsMainComponent implements OnInit {
  @Input() displayItem: any;
  @Input() recipeNutrition: any;
  @Input() groupImg: any;
  @Input() productType: any;
  @ViewChild('openModal', { static: true }) openModal: ElementRef;
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  quantity: string;
  comment: string;
  user = {
    userId: "",
    username: "",
  };
  imgUrl;
  isSubmit = false;
  language;
  mainImg ;

  constructor(private apiService: ApiService, private utility: UtilityService, private notify: NotifyService) {
    this.language = this.utility.getLanguage().toString();
    if (this.utility.getUser()) {
      this.user = this.utility.getUser();
    }
    //console.log(this.productType)
  }
  ngOnInit() {
 
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.displayItem){
      this.imgUrl = changes.displayItem.currentValue.thumbnail
    }
    
  }

  ngAfterViewInit(): void {
   

    this.changeImg(this.displayItem.thumbnail)
  }


  changeImg(url) {
    this.imgUrl = url;
  }


  createTransaction(data) {
    this.isSubmit = true;
    if (data.status === "VALID") {
      var body = {
        custId: this.user.userId,
        productId: this.displayItem.id,
        productName: this.displayItem.name,
        customerName: this.user.username,
        quantity: this.quantity,
        comment: this.comment,
        status: 'Đang chờ xử lý'
      }
      this.apiService.post('/transaction/create', body).then((data) => {
        if (data = "Success") {
          if (this.language === 'vi') {
            this.notify.successPost("Thành công");
          } else {
            this.notify.successPost("Sucess");
          }
          this.openModal.nativeElement.click();
          this.quantity = "";
          this.comment = ''
        } else {

          if (this.language === 'vi') {
            this.notify.error("Thất bại");
          } else {
            this.notify.error("FAIL");
          }
        }
        this.isSubmit = false;
      })
    }


  }
}
