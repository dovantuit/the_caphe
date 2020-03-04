import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-culture-news-blog-recipes-detail-infomation',
  templateUrl: './culture-news-blog-recipes-detail-infomation.component.html',
  styleUrls: ['./culture-news-blog-recipes-detail-infomation.component.scss']
})
export class CultureNewsBlogRecipesDetailInfomationComponent implements OnInit {
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  @Input() recipeInfo: any;
  @Input() data: any;

  constructor() { 
  }
  ngOnInit() {
  }


}
