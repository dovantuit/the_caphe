import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilityService } from 'src/app/services/utility.service';
import { NotifyService } from 'src/app/services/notify.service';
@Component({
  selector: 'thehill-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language: String;
  newLanguage;
  username: string;
  password: string;
  user = {
    userId: "",
    username: "",
  };

  constructor(protected apiService: ApiService, protected utility: UtilityService, private notify: NotifyService) {
    if (this.utility.getUser()) {
      this.user = this.utility.getUser();
      //console.log(this.user);
    }
    this.language = this.utility.getLanguage().toString();
  }

  ngOnInit() {
  }

  logOut = () => {
    this.notify.success("Đăng xuất thành công")
    setTimeout(() => {
    this.utility.removeUser();
    this.username;
    this.password;
    location.href = "/";
    }, 500);
  }

  login() {

    if (this.username && this.password) {
      var body = {
        email: this.username,
        password: this.password
      }

      this.apiService.post('/customer/login', body).then((data: any) => {
         if(data !== "NOT_FOUND") 
         {     
          this.notify.success("Đăng nhập thành công")
          setTimeout(() => {
            this.utility.setUser(data.name, data.id,data.type)
          location.reload();
          }, 200);
         } else this.notify.error("Sai thông tin tài khoản...")
      })
    } else this.notify.error("Vui lòng nhập đầy đủ thông tin")

  }

  changeLanguage(language: string) {    
    if(language !== this.language){
     this.utility.setLanguage(language).then((data: string) => {
       location.reload();
     })
    }
   }
}
