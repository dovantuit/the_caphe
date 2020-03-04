import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {DomSanitizer} from '@angular/platform-browser'
import 'owl.carousel';
declare var $: any;
@Component({
  selector: 'app-culture-news-blog-guild',
  templateUrl: './culture-news-blog-guild.component.html',
  styleUrls: ['./culture-news-blog-guild.component.scss'],

})
export class CultureNewsBlogGuildComponent implements OnInit {

  constructor(private apiService: ApiService,private sanitizer: DomSanitizer) {
    
  }
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  data;
  mainData;
  youtubeUrl;
  @ViewChild('main', { static: true }) main: ElementRef;
  ngOnInit() {
    this.getBrewGuild();
   
  }

  getBrewGuild = () => {
    this.apiService.get(`/items/get-by-menu-${6}`).then((data: any) => {
      this.data = data.slice(0,7)
      this.mainData = data.slice(0,1)[0];
      this.youtubeUrl = this.updateVideoUrl(this.mainData.youtubeUrl)
      if(this.data){
        $.getScript('../../../../assets/js/owl-guild.js');
      }
    })
  }
  
  setGuildId = id => {
    this.mainData = this.data.filter(item => item.id == id)[0]
    this.youtubeUrl = this.updateVideoUrl(this.mainData.youtubeUrl)
    const scrollTop = this.main.nativeElement.offsetTop - 200
    window.scroll({
      top: scrollTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  updateVideoUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
