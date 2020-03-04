import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-culture-news-blog-recipes-detail-carousel',
  templateUrl: './culture-news-blog-recipes-detail-carousel.component.html',
  styleUrls: ['./culture-news-blog-recipes-detail-carousel.component.scss']
})
export class CultureNewsBlogRecipesDetailCarouselComponent implements OnInit {
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  id: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
 
  }
  data;
  ngOnInit() {
    this.getPostRecipesRecent();
  }

  //recent post

  getPostRecipesRecent() {
    let body = {
      "course": '',
      "category": '',
      "specialDiet": '',
    }


    this.apiService.post(`/items/get-recipe-by-multiparam/page=${1}`, body).then((data: any) => {
      this.data=data.items;
      if(this.data) $.getScript('../../../../../assets/js/recipes-detail.js');
    })

  }

  
}
