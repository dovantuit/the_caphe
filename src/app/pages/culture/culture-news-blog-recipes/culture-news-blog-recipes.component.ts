import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-culture-news-blog-recipes',
  templateUrl: './culture-news-blog-recipes.component.html',
  styleUrls: ['./culture-news-blog-recipes.component.scss']
})
export class CultureNewsBlogRecipesComponent implements OnInit {


  constructor(private apiService: ApiService) { }
  HOST_IMG = 'https://www.thehillcoffee.com.vn/assets/uploads/'
  categories: any;
  course: any;
  specialDiet: any;

  recipes;
  totalPage;

  listNumberPagination = [];
  currentPage;

  selectedPage;


  tags;
  recentPost;



  isRemove;
  changeCourse="";
  changeCategory="";
  changeSpecialDiet="";


  ngOnInit() {
    this.getCategories();
    this.getCourse();
    this.getSpecialDiet();
    this.getPostRecipes();
    this.getRecentPosts();
  }

  getRecentPosts() {
    let body = {
      "course": "",
      "category": "",
      "specialDiet": "",
    }

    this.apiService.post(`/items/get-recipe-by-multiparam/page=${1}`, body).then((data: any) => {
      this.recentPost = data.items.slice(0, 5);
      console.log(this.recentPost);
      
      this.tags = data.tags.replace('[', ' ').replace(']', ' ').split(',');
    })
  }

  getCategories = () => {
    this.apiService.get(`/category-recipe/get-all`).then((data: any) => {
      this.categories = data
    })
  }

  getCourse = () => {
    this.apiService.get(`/courses/get-all`).then((data: any) => {
      this.course = data
    })
  }

  getSpecialDiet = () => {
    this.apiService.get(`/special-diet/get-all`).then((data: any) => {
      this.specialDiet = data
    })
  }

  convertDate = (string) => {
    return new Date(string).toDateString().substring(4,15)
  }

  getPostRecipes() {
    let body = {
      "course": this.changeCourse,
      "category": this.changeCategory,
      "specialDiet": this.changeSpecialDiet,
    }

    this.apiService.post(`/items/get-recipe-by-multiparam/page=${1}`, body).then((data: any) => {
      //console.log(data)
      this.recipes = data.items;
      console.log(this.recipes);
      
      this.currentPage = data.page;
      this.totalPage = data.totalPages;
      this.selectedPage=this.currentPage;
      for (let index = 0; index < data.totalPages; index++) {
        this.listNumberPagination.push((index + 1));
      }
    })
  }

  onChangePage = (page) => {
    if (page !== this.currentPage) {
      let body = {
        "course": this.changeCourse,
        "category": this.changeCategory,
        "specialDiet": this.changeSpecialDiet,
      }
  
      this.apiService.post(`/items/get-recipe-by-multiparam/page=${page}`, body).then((data: any) => {
        //console.log(data);
        this.recipes = data.items;
        this.currentPage = data.page;
        this.selectedPage=this.currentPage;
      })

      this.scrollToTop();
    }
  }

  prev = () => {
    if ((this.currentPage - 1) >= 1) {
      this.currentPage--;
      let body = {
        "course": this.changeCourse,
        "category": this.changeCategory,
        "specialDiet": this.changeSpecialDiet,
      }
  
      this.apiService.post(`/items/get-recipe-by-multiparam/page=${this.currentPage}`, body).then((data: any) => {
        this.recipes = data.items;
        this.currentPage = data.page;
        $('.page-number').removeClass('active');
        $(`#page-number-${this.currentPage}`).addClass('active');
      })

      this.scrollToTop();
    }
  }

  next = () => {
    if ((this.currentPage + 1) <= this.totalPage) {
      this.currentPage++;

      let body = {
        "course": this.changeCourse,
        "category": this.changeCategory,
        "specialDiet": this.changeSpecialDiet,
      }
  
      this.apiService.post(`/items/get-recipe-by-multiparam/page=${this.currentPage}`, body).then((data: any) => {
        this.recipes = data.items;
        this.currentPage = data.page;
        $('.page-number').removeClass('active');
        $(`#page-number-${this.currentPage}`).addClass('active');
      })

      this.scrollToTop();
    }

  }

  

  scrollToTop = () => {
    window.scroll({
      top: 70,
      left: 0,
      behavior: 'smooth'
    });
  }

  changeRecipes = (course,category, specialDiet) => {
    this.changeCategory = category ? category : this.changeCategory
    this.changeCourse=course ? course :  this.changeCourse;
    this.changeSpecialDiet=specialDiet ? specialDiet : this.changeSpecialDiet;

    this.isRemove = true;
    let body = {
      "course": this.changeCourse,
      "category": this.changeCategory,
      "specialDiet": this.changeSpecialDiet,
    }

    this.apiService.post(`/items/get-recipe-by-multiparam/page=${1}`, body).then((data: any) => {
      this.recipes = data.items;
      this.currentPage = data.page;
      this.totalPage = data.totalPages;
      this.selectedPage=this.currentPage;
      this.listNumberPagination = []
      for (let index = 0; index < data.totalPages; index++) {
        this.listNumberPagination.push((index + 1));
      }
    })
  }

  removeSelect = () => {
    this.changeCategory = '';
    this.changeCourse='';
    this.changeSpecialDiet='';

    this.changeRecipes(this.changeCourse,this.changeCategory,this.changeSpecialDiet)
    setTimeout(() => {
      this.isRemove = false;
    }, 200);
  }

}
 

    
  


