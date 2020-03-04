import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-aboutus-stories',
  templateUrl: './aboutus-stories.component.html',
  styleUrls: ['./aboutus-stories.component.scss']
})
export class AboutusStoriesComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  HOST_IMG= "https://www.thehillcoffee.com.vn/assets/uploads/"
  listData;

  ngOnInit() {
    this.getWhatWeDo();
  }


  getWhatWeDo() {
    this.apiService.get(`/items/get-by-menu-${13}`).then((data) => {
      this.listData = data;
      console.log(this.listData);

    })
  }

}
