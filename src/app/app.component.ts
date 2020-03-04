import { ScrollTopService } from './services/scrollToTop.services';
import { Component } from '@angular/core';
import { UtilityService } from './services/utility.service';
import { TranslateService } from '@ngx-translate/core';
import { viLocale } from 'ngx-bootstrap/chronos/i18n/vi';

@Component({
  selector: 'thehill-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thehillcoffee';

  constructor(private utility: UtilityService, private translate: TranslateService, private scrollTopService: ScrollTopService){
    translate.setDefaultLang(utility.getLanguage());

  }


  ngOnInit() {
    this.scrollTopService.setScrollTop();
  }
}
