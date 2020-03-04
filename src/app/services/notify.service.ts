import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor() { }
  // success(message: string) {
  //   $('body').append(`<div
  //             class="alert alert-success"
  //             id="notificationsSuccess"
  //             style="position: fixed;
  //             bottom: 10px;
  //             right:0px;
  //             font-family: Playfair Display SC;
  //             font-size: 1.5em;
  //             z-index:999999;
  //             display: none;">
  //             <i class="fa fa-check"></i>
  //             ${message}</div>`);
  //   $('#notificationsSuccess').slideDown('fast');
  //   setTimeout(() => {
  //     $('#notificationsSuccess').slideUp('fast');
  //     setTimeout(() => {
  //       $('#notificationsSuccess').remove();
  //     }, 1000);
  //   }, 3000);
  // };

  // error(message: string) {
  //   $('body').append(`<div
  //             class="alert alert-danger"
  //             id="notificationsError"
  //             style="position: fixed;
  //             font-family: Playfair Display SC;
  //             bottom: 10px;
  //             right:0px;
  //             font-size: 1.5em;
  //             z-index:999999;
  //             display: none;">
  //             <i class="fa fa-times"></i>
  //             ${message}</div>`);
  //   $('#notificationsError').slideDown('fast');
  //   setTimeout(() => {
  //     $('#notificationsError').slideUp('fast');
  //     setTimeout(() => {
  //       $('#notificationsError').remove();
  //     }, 1000);
  //   }, 3000);
  // };

  error(text: any) {
    {

      Swal.fire({
        position: 'center',
        type: 'error',
        title: `${text}`,
        showConfirmButton: false,
        timer: 2000
      })
    }
  }


  successPost(text: any) {
    Swal.fire({
      position: 'center',
      type: 'success',
      // text: 'Chúng tôi đã nhận được thông tin của bạn và sẽ liên hệ với bạn trong thời gian sớm nhất.',
      title: `${text}`,
      showConfirmButton: false,
      timer: 2500
    })
  }

  success(text: any) {
    Swal.fire({
      position: 'center',
      type: 'success',
      title: `${text}`,
      showConfirmButton: false,
      timer: 2000
    })
  }

  confirm(title: string, message: string) {
    if (!$('#confirmModal').length) {
      $('body').append(`
    <div id="confirmModal" class="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" id="closebtn" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">${title}</h4>
          </div>
          <div class="modal-body">
            <p>${message}</p>
          </div>
          <div class="modal-footer">
          <button type="button" id="nobtn" class="btn btn-default" data-dismiss="modal">No</button>
            <button type="button" id="yesbtn" class="btn btn-primary" data-dismiss="modal">Yes</button>
          </div>
        </div>
      </div>
    </div>`);
    }
    return new Promise((resolve, reject) => {
      $('#confirmModal').fadeIn('fast');
      $("#modal").fadeOut('fast');
      $('#yesbtn').click(() => {
        resolve();
        $('#confirmModal').fadeOut('fast');
        $('#yesbtn').off('click');
        $('#nobtn').off('click');
      });
      $('#nobtn').click(() => {
        reject();
        $('#confirmModal').fadeOut('fast');
        $('#yesbtn').off('click');
        $('#nobtn').off('click');
      });
      $('#closebtn').click(() => {
        $('#confirmModal').fadeOut('fast');
        $('#yesbtn').off('click');
        $('#nobtn').off('click');
      });
    });
  }

  secure(title: string, message: string, privateCode: string) {
    if (!$('#secureModal').length) {
      $('body').append(`
    <div id="secureModal" class="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" id="closebtn" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">${title}</h4>
          </div>
          <div class="modal-body">
            <p>${message}</p>
            <div>
              <input id="code" class="form-control input-sm my-1" type="password">
            </div>
          </div>
          <div class="modal-footer">
          <button type="button" id="nobtn" class="btn btn-default" data-dismiss="modal">No</button>
            <button type="button" id="okbtn" class="btn btn-primary" data-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>`);
    }
    return new Promise((resolve, reject) => {
      $('#secureModal').fadeIn('fast');
      $('#okbtn').click(() => {
        if ($("#code").val() == privateCode) {
          resolve();
        } else {
          reject();
        }
        $('#secureModal').fadeOut('fast');
        $('#okbtn').off('click');
        $('#nobtn').off('click');
        $("#code").val("");
      });
      $('#nobtn').click(() => {
        reject();
        $('#secureModal').fadeOut('fast');
        $('#okbtn').off('click');
        $('#nobtn').off('click');
        $("#code").val("");
      });
      $('#closebtn').click(() => {
        $('#secureModal').fadeOut('fast');
        $('#okbtn').off('click');
        $('#nobtn').off('click');
        $("#code").val("");
      });
    });
  }
}




// export class NotifyService {

//   constructor() { }


//   // goodjob() {
//   //   swal({
//   //     position: 'center',
//   //     type: 'success',
//   //     title: 'Good job!',
//   //     showConfirmButton: false,
//   //     timer: 1500
//   //   });
//   // }



//   // loginFirst() {
//   //   swal({
//   //     type: 'error',
//   //     title: 'Xin lỗi...',
//   //     text: 'Bạn phải đăng nhập trước để vào hệ thống!',
//   //     showConfirmButton: false,
//   //     timer: 1500
//   //   });
//   // }

//   // logoutFirst(name: any) {
//   //   return new Promise((resolve, reject) => {
//   //     swal({
//   //       type: 'error',
//   //       title: 'Oops...',
//   //       text: `You have login to my website.
//   //       Your current account is: ${name}.
//   //       If you want login with another account, please logout first.
//   //       Thank you !!!`,
//   //     });
//   //     resolve();
//   //   })

//   // }

//   // welcome(name: any) {
//   //   swal({
//   //     position: 'center',
//   //     title: `Xin chào ${name}!`,
//   //     showConfirmButton: false,
//   //     timer: 1500
//   //   });
//   // }

//   // goodbye(name: any) {
//   //   swal({
//   //     position: 'center',
//   //     title: `Good bye ${name}!
//   //     See you again !!!`,
//   //     showConfirmButton: false,
//   //     timer: 1500
//   //   });
//   // }

//   // comfirm() {
//   //   return new Promise((resolve, reject) => {
//   //     swal({
//   //       title: 'Bạn chắc chưa?',
//   //       text: 'Bạn sẽ không thể hoàn nguyên tác vụ này!',
//   //       type: 'warning',
//   //       showCancelButton: true,
//   //       confirmButtonColor: '#3085d6',
//   //       cancelButtonColor: '#d33',
//   //       confirmButtonText: 'Chắc chắn!'
//   //     }).then(result => {
//   //       if (result.value) {
//   //         resolve();
//   //       } else {
//   //         reject();
//   //       }
//   //     });
//   //   });

//   // }
// }
