import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  culture;
  firstCulture;
  secondCulture;
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  ngOnInit() {
    this.getCulture();
  }

  getCulture = () => {
    this.apiService.get(`/items/get-by-menu-${13}`).then((data: any) => {
      this.culture = data.slice(2,5)
      this.firstCulture=data[0]
      this.secondCulture=data[1]
    })
  }

}
