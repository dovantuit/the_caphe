import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-culture-news-blog-left',
  templateUrl: './culture-news-blog-left.component.html',
  styleUrls: ['./culture-news-blog-left.component.scss']
})
export class CultureNewsBlogLeftComponent implements OnInit {
  @Input() blogs:any;
  constructor(private apiService: ApiService) { }

  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  ngOnInit() {
    
  }

  convertMonth = (string) => {
    return new Date(string).toDateString().substring(4,8)
  }
  
  ngAfterContentChecked(){
    // console.log(this.blogs);
  }
}
