import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private apiService: ApiService, protected utility: UtilityService) {
    this.userId = this.utility.getUser().userId;
  }

  userId;
  user;
  readonly = true;
  isEdit=false;

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.apiService.get(`/customer/get-by-${this.userId}`).then((data) => {
      this.user = data;
      //console.log(data)
    })
  }

  changeInfo = () => {
    this.readonly = !this.readonly;
    let temp=this.user;
    this.user=temp;

  }

  cancel = () => {
    let temp=this.userId;
    this.userId=temp;
  }


  saveInfo = (user) => {
    this.apiService.post(`/customer/update-by-${this.userId}`,user).then((data) => {
      this.user = data;
      //console.log(data)
    })
  }

}
