import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-culture-news-blog-recipes-detail-desciption',
  templateUrl: './culture-news-blog-recipes-detail-desciption.component.html',
  styleUrls: ['./culture-news-blog-recipes-detail-desciption.component.scss']
})
export class CultureNewsBlogRecipesDetailDesciptionComponent implements OnInit {
 @Input() recipeNutrition: any;
 @Input() recipeInfo:any;
 HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  constructor() { }

  ngOnInit() {
  }

}
