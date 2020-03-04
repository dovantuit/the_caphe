import { ActivatedRoute } from '@angular/router';

import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, OnInit
} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

import { Subject } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { NotifyService } from 'src/app/services/notify.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { post } from 'selenium-webdriver/http';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.scss']
})
export class FormReservationComponent implements OnInit {

  imgUrl;
  fullName;
  address;
  email;
  phone;
  undate;
  date = this.undate;
  time;
  optIn = 'no';
  salesVolume;
  targetAudiences;
  businessScale;
  others;
  isSubmit = false;
  timeStart: Date = null;
  timeEnd: Date = null;
  district: any = undefined;

  sv;
  constructor(private apiService: ApiService, private notifyService: NotifyService, private modal: NgbModal, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activeRoute.queryParams
      .subscribe(params => {
        this.sv = params.sv.replace(/-/g, " ")
        console.log(this.sv)
      });
  }

  onSubmit(data) {
    //console.log(data);
    if (this.timeStart && this.timeEnd)
      this.time = this.timeStart.toLocaleTimeString().substring(0, 5) + ' - ' + this.timeEnd.toLocaleTimeString().substring(0, 5)
    this.isSubmit = true;
    if (data.status === "VALID") {
      this.date = this.undate.toISOString().substring(0, 10);
      //console.log(this.date);
      const body = {
        fullName: this.fullName,
        address: this.address,
        email: this.email,
        phone: this.phone,
        district: this.district,
        date: this.date,
        service: this.sv,
        time: this.time,
        optIn: this.optIn,
        salesVolume: this.salesVolume,
        targetAudiences: this.targetAudiences,
        businessScale: this.businessScale,
        others: this.others
      };
      //console.log(body);

      this.apiService.post('/reservation/create', body).then((data) => {
        //console.log(data)
        if (data === 'Reservation success') {
          this.notifyService.successPost('Gửi thành công');
          this.isSubmit = false;
          this.fullName = '';
          this.address = '';
          this.email = '';
          this.phone = '';
          this.district = undefined;
          this.date = '';
          this.time = '';
          this.optIn = '';
          this.salesVolume = '';
          this.targetAudiences = '';
          this.businessScale = '';
          this.others = '';
          this.timeStart = null;
          this.timeEnd = null;
          //console.log(this.district)
        } else this.notifyService.error('Đã có lỗi xảy ra!');
      })
    }

  }
  mouseEnter() {
    this.imgUrl = "../../../assets/images/3/menu_product1.png";
  }
  mouseLeave() {
    this.imgUrl = "";
  }
}
