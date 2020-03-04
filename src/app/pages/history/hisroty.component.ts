
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private apiService: ApiService, protected utility: UtilityService) {
    this.userId = this.utility.getUser().userId;
  }

  userId;
  data;
  status;

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.apiService.get(`/transaction/get-by-${this.userId}`).then((data) => {
      this.data = data;
      //console.log(data)
    })
  }

}
