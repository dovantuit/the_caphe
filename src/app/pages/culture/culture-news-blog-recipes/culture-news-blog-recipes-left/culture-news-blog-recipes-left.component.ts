import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-culture-news-blog-recipes-left',
  templateUrl: './culture-news-blog-recipes-left.component.html',
  styleUrls: ['./culture-news-blog-recipes-left.component.scss']
})
export class CultureNewsBlogRecipesLeftComponent implements OnInit {
  @Input() recipes:any;
  constructor(private apiService: ApiService) { }

  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  ngOnInit() {
   
    // console.log(this.recipes);
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // console.log(this.recipes);
  }

}
