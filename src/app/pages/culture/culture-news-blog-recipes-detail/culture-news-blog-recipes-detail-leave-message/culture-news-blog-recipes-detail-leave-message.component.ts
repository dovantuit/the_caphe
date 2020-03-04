import { NotifyService } from './../../../../services/notify.service';
import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-culture-news-blog-recipes-detail-leave-message',
  templateUrl: './culture-news-blog-recipes-detail-leave-message.component.html',
  styleUrls: ['./culture-news-blog-recipes-detail-leave-message.component.scss']
})
export class CultureNewsBlogRecipesDetailLeaveMessageComponent implements OnInit {

  id: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private notifyService: NotifyService) {
    this.id = this.route.snapshot.params['id']
  }
  comment = {
    name: String,
    comment: String,
    email: String
  };
  userName: string;
  userComment: string
  userEmail: string
  ngOnInit() {
  }

  postReply = () => {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (!isNullOrUndefined(this.userName) && !isNullOrUndefined(this.userComment) && !isNullOrUndefined(this.userEmail)) {
      if(EMAIL_REGEXP.test(this.userEmail)){
        var object = {
          "postId": this.id,
          "comment": {
            "name": this.userName,
            "comment": this.userComment,
            "email": this.userEmail
          }
        }
          this.apiService.post('/user/comment-in-post', object).then(res => {
            this.userName = '';
            this.userComment = '';
            this.userEmail = '';
            this.notifyService.success("Gửi thành công")
          })
      }else{
        this.notifyService.error("Email không đúng định dạng")
      }
    } else this.notifyService.error("Vui lòng nhập đầy đủ thông tin")
  }
}
