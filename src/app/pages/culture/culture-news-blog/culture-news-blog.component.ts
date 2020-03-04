import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatepickerDateCustomClasses } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-culture-news-blog',
  templateUrl: './culture-news-blog.component.html',
  styleUrls: ['./culture-news-blog.component.scss']
})
export class CultureNewsBlogComponent implements OnInit {
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  dateCustomClasses: DatepickerDateCustomClasses[];
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
    this.getBlogs();
  }

  start = 0;
  bsValue = new Date();
  categories;
  blogs;
  tags;
  recentBlogs;
  listNumberPagination = [];
  currentPage;
  totalPage;
  firstVisit = true;


  selectedPage;


  changeDate = "";
  changeCategory = "";

  isRemove = false;


  ngOnInit() {
    this.getCategories();
    this.getRecentBlogs();

    $(`#page-number-1`).addClass('active');
  }

  getCategories = () => {
    this.apiService.get(`/category-news/get-all`).then((data: any) => {
      this.categories = data
    })
  }

  getRecentBlogs = () => {
    let body = {
      "date": "",
      "category": "",
    }
    this.apiService.post(`/items/get-news-by-multiparam/page=${1}`, body).then((data: any) => {
      this.recentBlogs = data.items.slice(0, 5);
      this.tags = data.tags.replace('[', ' ').replace(']', '').split(',');
    })
  }


  getBlogs = () => {
    let body = {
      "date": "",
      "category": "",
    }
    this.apiService.post(`/items/get-news-by-multiparam/page=${1}`, body).then((data: any) => {
      this.blogs = data.items;
      this.currentPage = data.page;
      this.totalPage = data.totalPages;
      this.selectedPage = this.currentPage;
      for (let index = 0; index < data.totalPages; index++) {
        this.listNumberPagination.push((index + 1));
      }
    })
  }

  convertDate = (string) => {
    return new Date(string).toDateString().substring(4,15)
  }

  onChangePage = (page) => {
    if (page !== this.currentPage) {
      let body = {
        "date": this.changeDate,
        "category": this.changeCategory
      }
      this.selectedPage = page;
      this.apiService.post(`/items/get-news-by-multiparam/page=${page}`, body).then((data: any) => {
        this.blogs = data.items;
        this.currentPage = data.page;

        this.scrollToTop();
      })
    }
  }


  prev = () => {
    if ((this.currentPage - 1) >= 1) {
      this.currentPage--;
      let body = {
        "date": this.changeDate,
        "category": this.changeCategory
      }

      this.apiService.post(`/items/get-news-by-multiparam/page=${this.currentPage}`, body).then((data: any) => {
        this.blogs = data.items;
        this.currentPage = data.page;
        this.selectedPage = this.currentPage;
        this.scrollToTop();
      })
    }
  }

  next = () => {
    if ((this.currentPage + 1) <= this.totalPage) {
      this.currentPage++;
      let body = {
        "date": this.changeDate,
        "category": this.changeCategory
      }

      this.apiService.post(`/items/get-news-by-multiparam/page=${this.currentPage}`, body).then((data: any) => {
        this.blogs = data.items;
        this.currentPage = data.page;
        this.selectedPage = this.currentPage;
        this.scrollToTop();
      })

    }
  }

  returnTitle = string => {
    let result;
    if(string.length > 30) result=string.substring(0,30) + '...'
    else result=string;
    return result;
   }

  scrollToTop = () => {
    window.scroll({
      top: 70,
      left: 0,
      behavior: 'smooth'
    });
  }


  changeBlog = (category, date) => {
    this.changeCategory = category;
    this.isRemove = true;
    let body = {
      "date": this.changeDate,
      "category": this.changeCategory
    }

    this.apiService.post(`/items/get-news-by-multiparam/page=${1}`, body).then((data: any) => {
      this.blogs = data.items;
      this.currentPage = data.page;
      this.selectedPage = this.currentPage;
      this.totalPage = data.totalPages;
      this.listNumberPagination = []
      for (let index = 0; index < data.totalPages; index++) {
        this.listNumberPagination.push((index + 1));
      }
    })
  }

  onValueChange = event => {
    if (!this.firstVisit) {
      this.start = 2
      const date = new Date(event)
      this.isRemove = true;
      this.changeDate = date.toISOString().substring(0, 10);
      if (this.start > 1) this.changeBlog(this.changeCategory, this.changeDate)
    } else {
      this.firstVisit = false;
    }

  }

  removeSelect = () => {
    this.changeCategory = "";
    this.changeDate = "";
    this.selectedPage = '1';
    $('table.days td span').removeClass('selected');
    this.changeBlog(this.changeCategory, this.changeDate)
    setTimeout(() => {
      this.isRemove = false;
    }, 200);
  }

}

