import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { UtilityService } from './utility.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  language: String;
  host;
  constructor(private http: HttpClient,
    private router: Router, private utilityService: UtilityService) {
    this.language = this.utilityService.getLanguage().toString();
    if (this.language.match('vi')) {
      this.host = 'https://thehill-api.tesosoft.com/api/vi';
      // this.host = 'http://localhost:9099/api/vi'

    } if (this.language.match('en')) {
      this.host = 'https://thehill-api.tesosoft.com/api/en';
      // this.host = 'http://localhost:9099/api/en'
    } else {
      this.host = 'https://thehill-api.tesosoft.com/api/vi';
      // this.host = 'http://localhost:9099/api/vi'
    }
  }


  // api get
  get(url: string) {
    //console.log("================");
    //console.log(this.host + url);
    // let headers = new Headers();
    // headers.append("token", this.currentUser.token || '');
    return new Promise((resolve, reject) => {
      this.http.get(this.host + url).toPromise().then((res: any) => {
        //console.log(res['Response']);
        resolve(res['Response']);
      }).catch((err) => {
        reject('saiiiiiiiiiiiii');
      });
    });
  }

  // api post
  post(url: string, body: any) {
    // let headers = new Headers();
    // headers.append("token", this.currentUser.token || '');
    const promise = new Promise((resolve, reject) => {
      this.http.post(this.host + url, body).toPromise().then((res: any) => {
        resolve(res['Response']);
      }).catch(err => {
        //console.log(err)
        reject('UNKNOWN_ERROR');

      });
    });
    return promise;
  }

  postCV(url: string, body: any, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('body', JSON.stringify(body));
    const promise = new Promise((resolve, reject) => {
      this.http.post(this.host + url, formData).toPromise().then((res: any) => {
        resolve(res['Response']);
      }).catch(err => {
        //console.log(err)
        reject('UNKNOWN_ERROR');

      });
    });
    return promise;
  }


}