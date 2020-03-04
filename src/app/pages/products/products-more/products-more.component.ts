import { Component, OnInit, Input, AfterContentInit, AfterContentChecked, Output, EventEmitter } from '@angular/core';
// import * as $ from 'jquery'
import 'owl.carousel';
declare var $: any;

import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-products-more',
  templateUrl: './products-more.component.html',
  styleUrls: ['./products-more.component.scss']
})
export class ProductsMoreComponent implements AfterContentChecked {

  @Input() menuId: any;
  @Input() menus: any;
  @Output() getItem = new EventEmitter<any>();
  id: any;
  items: any[] = [];
  item;
  test = 1;
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  constructor(private apiService: ApiService) {
    
    
  }

  ngOnInit() {
    this.getItemByMenu();
  }


  getItemByMenu() {
    this.apiService.get(`/items/get-by-menu-${this.id}`).then((data: any) => {
      //console.log(data)
      this.items = data['items'];
      $.getScript('../../../../assets/js/app.js');

    })
  }

  sendItem(item: any) {
    this.getItem.emit(item)
  }

  ngAfterContentChecked(): void {
    if (this.id !== this.menuId) {
      this.id = this.menuId;
      this.getItemByMenu();
    }
  
  }

}
