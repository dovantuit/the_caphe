import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recruitment-join-us',
  templateUrl: './recruitment-join-us.component.html',
  styleUrls: ['./recruitment-join-us.component.scss']
})
export class RecruitmentJoinUsComponent implements OnInit {

  listJobs: any;
  selected: any;
  listPosition: any;
  jobId: any;
  positionDetail: any;
  description: any;
  checked=false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getListJobs();
    
  }
  


  getListJobs() {
    this.apiService.get(`/menu/get-by-topic-${2}`).then((data) => {
      this.listJobs = data;
      this.selected = this.listJobs[0];
      this.jobId = this.listJobs[0].id;
      //console.log(this.listJobs);
      if (this.jobId) {
        this.getListJobPosition(this.jobId);
      }
    })
  }

  selectedClass(item) {
    //console.log(this.checked)
    this.selected = item;
    this.jobId = item.id;
    if (this.jobId) {
      this.positionDetail = '';
      this.getListJobPosition(this.jobId);
    }
  }

  getListJobPosition(id) {
    this.apiService.get(`/items/get-by-menu-${id}`).then((data) => {
      // //console.log(data);
      this.listPosition = data;
      if (this.listPosition) {
        this.getPositionDetail(this.listPosition[0].id)
      }
    })
  }

  getPositionDetail(id) {

    this.apiService.get(`/items/get-by-${id}`).then((data: any) => {
      this.description = data.description;
      this.positionDetail = data['recruitment'][0];
      //console.log(this.positionDetail);
    })
  }




}
