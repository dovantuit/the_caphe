import { PolicyComponent } from './pages/policy/policy.component';
import { PaymentMethodComponent } from './pages/payment-method/payment-method.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { AboutusComponent } from "./pages/aboutus/aboutus.component"
import { ProductsComponent } from "./pages/products/products.component"
import { ServicesComponent } from "./pages/services/services.component"
import { EventComponent } from "./pages/event/event.component"
import { ContactComponent } from './pages/contact/contact.component';
import { ShippingReturnComponent } from './pages/shipping-return/shipping-return.component'

import { AboutusCareerComponent } from "./pages/aboutus/aboutus-career/aboutus-career.component"


import { CultureComponent } from "./pages/culture/culture.component"

import { CultureNewsBlogComponent } from "./pages/culture/culture-news-blog/culture-news-blog.component"
import { CultureNewsBlogDetailComponent } from "./pages/culture/culture-news-blog-detail/culture-news-blog-detail.component"

import { CultureNewsBlogRecipesComponent } from "./pages/culture/culture-news-blog-recipes/culture-news-blog-recipes.component"
import { CultureNewsBlogRecipesDetailComponent } from "./pages/culture/culture-news-blog-recipes-detail/culture-news-blog-recipes-detail.component"

import { CultureNewsBlogGuildComponent } from "./pages/culture/culture-news-blog-guild/culture-news-blog-guild.component"
import { BusinessComponent } from './pages/business/business.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';

import { HistoryComponent } from "./pages/history/hisroty.component"
import { UserComponent } from "./pages/user/user.component"
import { FormReservationComponent } from './pages/form-reservation/form-reservation.component';
import { ShareComponent } from './pages/share/share.component';
import { SiteMapComponent } from './pages/site-map/site-map.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'trang-chu'
      },
      {
        path: 'trang-chu',
        component: HomeComponent,
        data: { title: 'Trang chủ' }
      },
      {
        path: 've-chung-toi',
        component: AboutusComponent,
        data: { title: 'Về chúng tôi' }
      },
      // {
      //   path: 'san-pham',
      //   component: ProductsComponent,
      //   data: { title: 'Sản phẩm' }
      // },
      {
        path: 'san-pham/:text',
        component: ProductsComponent,
        data: { title: 'Sản phẩm' }
      },
      {
        path: 'dich-vu',
        component: ServicesComponent,
        data: { title: 'Dịch vụ' }
      },
      {
        path: 'lien-he',
        component: ContactComponent,
        data: { title: 'Liên hệ' }
      },
      {
        path: 'su-kien',
        component: EventComponent,
        data: { title: 'Sự kiện' }
      },
      {
        path: 'tuyen-dung',
        component: RecruitmentComponent,
        data: { title: 'Tuyển dụng' }
      },
      {
        path: 'doanh-nghiep/:text',
        component: BusinessComponent,
        data: { title: 'Doanh nghiệp' }
      },
      {
        path: 'van-hoa-ca-phe',
        component: CultureComponent,
        data: { title: 'Văn hóa Cà Phê' }
      },
      {
        path: 'tin-tuc',
        component: CultureNewsBlogComponent,
        data: { title: 'Tin tức' }
      },
      {
        path: 'tin-tuc/:id',
        component: CultureNewsBlogDetailComponent,
        data: { title: 'Tin tức' }
      },
      {
        path: 'cong-thuc',
        component: CultureNewsBlogRecipesComponent,
        data: { title: 'Công thức' }
      },
      {
        path: 'cong-thuc/:id',
        component: CultureNewsBlogRecipesDetailComponent,
        data: { title: 'Công thức' }
      },
      {
        path: 'huong-dan',
        component: CultureNewsBlogGuildComponent,
        data: { title: 'Hướng Dẫn' }
      },
      {
        path: 'lich-su-mua-hang',
        component: HistoryComponent,
        data: { title: 'Lịch sử mua hàng' }
      },
      {
        path: 'thong-tin-tai-khoan',
        component: UserComponent,
        data: { title: 'Thông tin tài khoản' }
      },
      {
        path: 'reservation-form',
        component: FormReservationComponent,
        data: { title: 'Reservation' }
      },
      {
        path: 'su-kien',
        component: EventComponent,
        data:{ title: 'Sự kiện'}
      },
      {
        path: 'phuong-thuc-thanh-toan',
        component: PaymentMethodComponent,
        data:{ title: 'Phương thức thanh toán'}
      },
      {
        path: 'chinh-sach-bao-mat',
        component: PolicyComponent,
        data:{ title: 'Chính sách bảo mật'}
      },
      {
        path: 'share-with-us',
        component: ShareComponent,
        data:{ title: 'Chia sẻ '}
      },
      {
        path: 'shipping-and-return',
        component: ShippingReturnComponent,
        data:{ title: 'Đổi trả '}
      },
      {
        path: 'site-map',
        component: SiteMapComponent,
        data:{ title: 'SiteMap '}
      }

      // {
      //   path: 'class-item/:platformId',
      //   canActivate: [IsAuthenticatedUser],
      //   component: ClassItemComponent,
      //   data: {title: 'Platform detail '}
      // },

      // {
      //   path: 'internal-error',
      //   component: InternalServerErrorComponent,
      //   data: {
      //     title: '500 -Internal Serve'
      //   }
      // },

      // {
      //   path: 'time-out',
      //   component: InternalServerErrorComponent,
      //   data: {
      //     title: '401 -Time out'
      //   }
      // },

      // {
      //   path: '**',
      //   component: NotFoundComponent,
      //   data: {title: 'Page not found'}
      // },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
