import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'service-carousel',
  templateUrl: './service-carousel.component.html',
  styleUrls: ['./service-carousel.component.scss']
})
export class ServiceCarouselComponent implements OnInit {
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/';
  items: any;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get(`/items/get-by-menu-${9}`).then((data: any) => {
      this.items = data;
      if (this.items) {
        $.getScript('../../../../assets/js/owl-service.js');
      }
    })
  }

  clickRouter = (text:string) => {
    text.replace(/" "/g,"-")
    
    this.router.navigate(['/reservation-form'], { queryParams: { sv: text } });
  }

}
