import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-aboutus-timeline',
  templateUrl: './aboutus-timeline.component.html',
  styleUrls: ['./aboutus-timeline.component.scss']
})
export class AboutusTimelineComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  HOST_IMG= "https://www.thehillcoffee.com.vn/assets/uploads/"

  listData;

  ngOnInit() {
    this.getTimeLine();
  }


  getTimeLine() {
    this.apiService.get(`/items/get-by-menu-${12}`).then((data) => {
      this.listData = data;
      // console.log(this.listData);

    })
  }

}
