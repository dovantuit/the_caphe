import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-aboutus-mission',
  templateUrl: './aboutus-mission.component.html',
  styleUrls: ['./aboutus-mission.component.scss']
})
export class AboutusMissionComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  HOST_IMG= "https://www.thehillcoffee.com.vn/assets/uploads/"
  ourMisson;

  ngOnInit() {
    this.getWhatWeDo();
  }


  getWhatWeDo() {
    this.apiService.get(`/items/get-by-menu-${14}`).then((data) => {
      // console.log(data);
      
      this.ourMisson = data[0];
      // console.log( this.ourMisson);
      
    })
  }

}
