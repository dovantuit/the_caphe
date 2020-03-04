import { Component, OnInit,Input } from '@angular/core';
import 'owl.carousel';
declare var $: any;
@Component({
  selector: 'app-culture-news-blog-detail-carousel',
  templateUrl: './culture-news-blog-detail-carousel.component.html',
  styleUrls: ['./culture-news-blog-detail-carousel.component.scss']
})
export class CultureNewsBlogDetailCarouselComponent implements OnInit {
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  @Input() authors:any;
  constructor() { 

  }

  imgUrl; 


  ngOnInit() { 
    this.imgUrl = this.HOST_IMG + this.authors[0].imgUrl;
    $.getScript('../../../../../../assets/js/blog-detail.js');
  
  }

}
