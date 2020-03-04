import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-culture-news-blog-recipes-detail-main-content',
  templateUrl: './culture-news-blog-recipes-detail-main-content.component.html',
  styleUrls: ['./culture-news-blog-recipes-detail-main-content.component.scss']
})
export class CultureNewsBlogRecipesDetailMainContentComponent implements OnInit {
  @Input() recipeInfo: any;
  @Input() recipeNutrition: any;
  constructor() { }

  ngOnInit() {
  }

}
