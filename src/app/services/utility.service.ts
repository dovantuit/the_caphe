import { Injectable } from '@angular/core';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})

export class UtilityService {

  language = '';
  constructor() { }

  getLanguage() {
    try {
      this.language = localStorage.getItem('language');
      if (isNull(this.language)) {
        this.language = 'vi';
        localStorage.setItem('language', this.language);
      }
    } catch (error) {
      this.language = 'vi';
      localStorage.setItem('language', this.language);
   
    }
    return this.language;
  }

  setLanguage(language: string) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('language', language);
      resolve(this.getLanguage());
    });
  }

  user = {
    username: '',
    userId: '',
    userType:''
  };

  getUser() {
    try {
      this.user = JSON.parse(localStorage.getItem('userLocalStorage'));
      if (!this.user) {
        this.user = {
          username: '',
          userId: '',
          userType:''
        };
      }
    } catch {
      this.user = {
        username: '',
        userId: '',
        userType:''
      };
    }
    return this.user;
  }

  setUser(username: string, userId: string,userType:string) {
    this.user = {
      username: username,
      userId: userId,
      userType:userType

    };
    localStorage.setItem('userLocalStorage', JSON.stringify(this.user));
  }

  removeUser() {
    this.user = {
      username: '',
      userId: '',
      userType:''
    };
    localStorage.setItem('userLocalStorage', JSON.stringify(this.user));
  }
}
