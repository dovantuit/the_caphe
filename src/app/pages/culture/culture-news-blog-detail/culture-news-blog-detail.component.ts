import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
@Component({
  selector: 'app-culture-news-blog-detail',
  templateUrl: './culture-news-blog-detail.component.html',
  styleUrls: ['./culture-news-blog-detail.component.scss']
})
export class CultureNewsBlogDetailComponent implements OnInit {
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/';
  id: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private sanitized: DomSanitizer) {
    this.id = this.route.snapshot.params['id'];
    this.getBlog();
  }
  data;
  ngOnInit() {
  }

  getBlog() {
    this.apiService.get(`/items/get-by-${this.id}`).then((data: any) => {
      //console.log(data)
      this.data = data;
    });
  }

  convertMonth = (string) => {
    return new Date(string).toDateString().substring(4, 8)
  }

}
