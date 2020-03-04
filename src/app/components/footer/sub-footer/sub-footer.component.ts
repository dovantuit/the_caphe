import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { lang } from 'moment';


@Component({
  selector: 'sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.scss']
})
export class SubFooterComponent implements OnInit {
  language: String;
  newLanguage;
  constructor(private utilityService: UtilityService) {
    this.language = this.utilityService.getLanguage().toString();
    
  }

  ngOnInit() {
  }

  changeLanguage(language: string) {    
   if(language){
     alert('Worked');
    this.utilityService.setLanguage(language).then((data: string) => {
      // this.language = data;
      location.reload();
    })
   }
  

  }
  try(){
    if(this.language==="en"){
      this.changeLanguage("vi");
    } else {
      this.changeLanguage("en");
    }
    location.reload();
  }
}
