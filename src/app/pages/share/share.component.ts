import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor(private apiService: ApiService) {

  }
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  share;

  ngOnInit() {
    this.getShare();
  }


  getShare = () => {
    this.apiService.get(`/items/get-share-with-us`).then((data: any) => {
      this.share = data;
      if (this.share) $.getScript('../../../assets/js/share.js');
    })

  }

}
