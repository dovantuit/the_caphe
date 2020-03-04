import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {
  HOST_IMG = "https://www.thehillcoffee.com.vn/assets/uploads/"

  constructor(private apiService: ApiService) { }
  data: any;
  customerImg: any;
  ngOnInit() {
    this.getOurCustomerSay();

  }

  getOurCustomerSay() {
    this.apiService.get(`/items/get-by-menu-${5}/page=${1}`).then((data: any) => {
      this.data = data.items
      //console.log(typeof data.items)
      if (this.data) {
        $.getScript('../../../../assets/js/home.js');
      }
    })
  }
}
