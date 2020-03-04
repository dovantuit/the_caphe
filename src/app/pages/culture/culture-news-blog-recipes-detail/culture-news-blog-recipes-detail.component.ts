import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-culture-news-blog-recipes-detail',
  templateUrl: './culture-news-blog-recipes-detail.component.html',
  styleUrls: ['./culture-news-blog-recipes-detail.component.scss']
})
export class CultureNewsBlogRecipesDetailComponent implements OnInit {
  id: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    // this.id = this.route.snapshot.params['id']
    // this.getPostRecipes();
  }

  data;
  date;

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.getPostRecipes();
  }

  getPostRecipes() {
    this.apiService.get(`/items/get-by-${this.id}`).then((data: any) => {
      this.date= data.createdDate.split("-");
      this.data=data;
      //console.log(this.data)
    })
  }

  convertMonth = (string) => {
    return new Date(string).toDateString().substring(4,8)
  }
 

}
