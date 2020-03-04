import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { isNullOrUndefined } from 'util';
import { NotifyService } from '../../../../services/notify.service';
@Component({
  selector: 'app-culture-news-blog-recipes-detail-comments',
  templateUrl: './culture-news-blog-recipes-detail-comments.component.html',
  styleUrls: ['./culture-news-blog-recipes-detail-comments.component.scss']
})
export class CultureNewsBlogRecipesDetailCommentsComponent implements OnInit {

  id: any;
  @ViewChild('openModal', { static: true }) openModal:ElementRef;
  constructor(private apiService: ApiService, private route: ActivatedRoute,private notifyService: NotifyService) {
    this.id = this.route.snapshot.params['id']
  }
  comment:String;
  idReply:any;
  userName: String
  userComment: String

  ngOnInit() {
    this.getComment();
  }

  getComment = () => {
    this.apiService.get(`/user/get-comment-by/${this.id}`).then((data: any) => {
      this.comment = data;
    })
  }

  getIDReply = id => {
    this.idReply = id;
  }

  postReply = () => {
    if (!isNullOrUndefined(this.userName) && !isNullOrUndefined(this.userComment)) {
      var object = {
        "reply": {
          "userName":this.userName,
          "comment": this.userComment,
          "createdDate": new Date()
        },
        "userId": this.idReply
      }
      return new Promise((reject) => {
        this.apiService.post('/user/reply-comment', object).then(res => {
         
            this.userName ='';
            this.comment='';
        
          this.notifyService.success("Gửi thành công");
          this.getComment();
          this.openModal.nativeElement.click();
        }).catch((err) => reject(err));
      })
 
    } else this.notifyService.error("Vui lòng nhập thông tin đầy đủ");
  }


 
}
