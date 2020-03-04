import { Convert } from './../../services/convert.servics';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NotifyService } from 'src/app/services/notify.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  items;
  firstItem: any;
  menus: any;
  menuId: any;
  selected: any;
  scrollTop;
  dataImg;
  id;

  @ViewChild('productsMore', { static: true }) productsMore: ElementRef;
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  constructor(private convert:Convert,private apiService: ApiService, private load: LoadingService, private activeRoute: ActivatedRoute) {
    this.id = this.activeRoute.snapshot.paramMap.get('text');
  }

  ngOnInit() {
    this.getMenus();
  }



  selectedMenu(item: any) {
    this.load.start();
    window.history.replaceState({}, '',`/san-pham/${this.convert.convertToSlug(item.name)}`);
    this.selected = item;
    this.menuId = item.id;
    this.apiService.get(`/items/get-by-menu-${item.id}`).then((data) => {
      this.items = data;
      this.firstItem = this.items[0];
      this.getGroupImg(this.firstItem.id)
      $.getScript('../../../../assets/js/app.js');
      setTimeout(() => {
        this.load.stop();
      }, 300);
    })

  }

  getMenus() {
    this.apiService.get(`/menu/get-by-topic-${1}`).then((data: any) => {
      this.menus = data;
      if (this.menus) {
        if (this.id == 'ca-phe-hat') {
          this.selectedMenu(this.menus[0]);
        } else if (this.id == 'ca-phe-hoa-tan') {
          this.selectedMenu(this.menus[1]);
        } else {
          this.selectedMenu(this.menus[0]);
        }

        $.getScript('../../../../assets/js/pageproduct.js');
      }
    })
  }

  displayItem(item) {
    this.firstItem = item;
    // //console.log(item)
    // //console.log(this.firstItem.id)
    this.getGroupImg(this.firstItem.id)
    const scrollTop = this.productsMore.nativeElement.offsetTop + this.productsMore.nativeElement.clientHeight - 100
    window.scroll({
      top: scrollTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  getGroupImg(id) {
    this.apiService.get(`/image/get-by-${id}`).then((data) => {
      this.dataImg = data
      // //console.log(data)
    })
  }



}
