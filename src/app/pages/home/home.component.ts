import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/';
  items: any;
  leftImg;
  rightImg;

  constructor(private apiService: ApiService) { 

  }

  ngOnInit() {
    this.getItems();
  }
  getItems() {
    this.apiService.get(`/items/get-by-menu-${8}`).then((data: any) => {
      this.items = data[0];
      this.leftImg=this.items.bannerUrl;
      this.rightImg=this.items.thumbnail;

      // console.log(this.items);
      // console.log(this.leftImg);
    })
  }

}
