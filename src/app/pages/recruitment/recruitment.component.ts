import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})
export class RecruitmentComponent implements OnInit {

  listJobs: any;
  selected: any;
  selectedPosition: any;
  listPosition: any;
  jobId: any;
  positionDetail: any;
  description: any;
  checked = false;
  show;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getListJobs();

  }



  getListJobs() {
    this.apiService.get(`/menu/get-by-topic-${2}`).then((data) => {
      this.listJobs = data;
      this.selected = this.listJobs[0];
      this.jobId = this.listJobs[0].id;
      // //console.log(this.listJobs);
      if (this.jobId) {
        this.getListJobPosition(this.jobId);
      }
    })
  }

  selectedClass(item) {
    this.checked = false;
    this.selected = item;
    this.jobId = item.id;
    if (this.jobId) {
      this.positionDetail = '';
      this.getListJobPosition(this.jobId);
    }
  }

  getListJobPosition(id) {
    this.apiService.get(`/items/get-by-menu-${id}`).then((data) => {
      this.listPosition = data;
      if (this.listPosition.length === 0 || this.listPosition.length === null || this.listPosition.length === undefined) this.show = false;
      else {
        this.show = true;
        if (this.listPosition) this.getPositionDetail(this.listPosition[0].id)
      }
    })
  }

  getPositionDetail(id) {
    this.selectedPosition = id;
    this.apiService.get(`/items/get-by-${id}`).then((data: any) => {
      this.description = data.description;
      this.positionDetail = data['recruitment'][0];
      // //console.log(this.positionDetail);
    })
  }

}
