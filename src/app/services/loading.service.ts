import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }
  start() {
    $('body').append(`<any id = "globalloading"
  style = "top:0;
          left: 0;
          height: 100vh;
          width: 100vw;
          position: fixed;
          background: #ffff;
          z-index: 999;
          background-position: center;
          background-repeat: no-repeat;"
          ></any>`);
  }

  stop() {
    $('#globalloading').remove();
  }

  startbtnloading(index: string, id: string) {
    $(`.${index}`).append(`<img id="${id}" width="40" style="display: inline; position: absolute;" src="../assets/img/loading/login-btn.gif">`)
  }

  stopbtnloading(id: string) {
    $(`#${id}`).remove();
  }
}
