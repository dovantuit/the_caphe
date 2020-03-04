import { ScrollTopService } from './services/scrollToTop.services';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ProductsComponent } from './pages/products/products.component';
import { CultureComponent } from './pages/culture/culture.component';
import { ServicesComponent } from './pages/services/services.component';
import { BusinessComponent } from './pages/business/business.component';
import { EventComponent } from './pages/event/event.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { ShippingReturnComponent } from './pages/shipping-return/shipping-return.component';

import { FooterComponent } from './components/footer/footer.component';
import { FooterRightComponent } from './components/footer/footer-right/footer-right.component';
import { FooterLeftComponent } from './components/footer/footer-left/footer-left.component';
import { SubFooterComponent } from './components/footer/sub-footer/sub-footer.component';

import { HomeCarouselComponent } from './pages/home/home-carousel/home-carousel.component';
import { MainComponent } from './pages/main/main.component';
import { ServiceCarouselComponent } from './pages/services/service-carousel/service-carousel.component';
import { AboutusTimelineComponent } from './pages/aboutus/aboutus-timeline/aboutus-timeline.component';
import { AboutusStoriesComponent } from './pages/aboutus/aboutus-stories/aboutus-stories.component';
import { AboutusMissionComponent } from './pages/aboutus/aboutus-mission/aboutus-mission.component';


import { ProductsMoreComponent } from './pages/products/products-more/products-more.component';
import { ProductsMainComponent } from './pages/products/products-main/products-main.component';
import { BusinessCarouselComponent } from './pages/business/business-carousel/business-carousel.component';
import { AboutusCareerComponent } from './pages/aboutus/aboutus-career/aboutus-career.component';
import { AboutusCareerFirstComponent } from './pages/aboutus/aboutus-career/aboutus-career-first/aboutus-career-first.component';
import { AboutusCareerBenefitsComponent } from './pages/aboutus/aboutus-career/aboutus-career-benefits/aboutus-career-benefits.component';
import { AboutusCareerJoinusComponent } from './pages/aboutus/aboutus-career/aboutus-career-joinus/aboutus-career-joinus.component';


import { CultureNewsBlogComponent } from './pages/culture/culture-news-blog/culture-news-blog.component';

import { CultureNewsBlogLeftComponent } from './pages/culture/culture-news-blog/culture-news-blog-left/culture-news-blog-left.component';
import { CultureNewsBlogDetailComponent, SafeHtmlPipe } from './pages/culture/culture-news-blog-detail/culture-news-blog-detail.component';
import { CultureNewsBlogDetailCommentsComponent } from './pages/culture/culture-news-blog-detail/culture-news-blog-detail-comments/culture-news-blog-detail-comments.component';
import { CultureNewsBlogDetailCarouselComponent } from './pages/culture/culture-news-blog-detail/culture-news-blog-detail-carousel/culture-news-blog-detail-carousel.component';
import { CultureNewsBlogDetailLeaveMessageComponent } from './pages/culture/culture-news-blog-detail/culture-news-blog-detail-leave-message/culture-news-blog-detail-leave-message.component';


import { CultureNewsBlogRecipesComponent } from './pages/culture/culture-news-blog-recipes/culture-news-blog-recipes.component';
import { CultureNewsBlogRecipesLeftComponent } from './pages/culture/culture-news-blog-recipes/culture-news-blog-recipes-left/culture-news-blog-recipes-left.component';

import { CultureNewsBlogRecipesDetailComponent } from './pages/culture/culture-news-blog-recipes-detail/culture-news-blog-recipes-detail.component';
import { CultureNewsBlogRecipesDetailCarouselComponent } from './pages/culture/culture-news-blog-recipes-detail/culture-news-blog-recipes-detail-carousel/culture-news-blog-recipes-detail-carousel.component';
import { CultureNewsBlogRecipesDetailCommentsComponent } from './pages/culture/culture-news-blog-recipes-detail/culture-news-blog-recipes-detail-comments/culture-news-blog-recipes-detail-comments.component';
import { CultureNewsBlogRecipesDetailLeaveMessageComponent } from './pages/culture/culture-news-blog-recipes-detail/culture-news-blog-recipes-detail-leave-message/culture-news-blog-recipes-detail-leave-message.component';
import {
  CultureNewsBlogRecipesDetailDesciptionComponent
} from './pages/culture/culture-news-blog-recipes-detail/culture-news-blog-recipes-detail-desciption/culture-news-blog-recipes-detail-desciption.component';


import { CultureNewsBlogGuildComponent } from './pages/culture/culture-news-blog-guild/culture-news-blog-guild.component';
import { CultureNewsBlogRecipesDetailMainContentComponent } from './pages/culture/culture-news-blog-recipes-detail/culture-news-blog-recipes-detail-main-content/culture-news-blog-recipes-detail-main-content.component';
import { CultureNewsBlogRecipesDetailInfomationComponent } from './pages/culture/culture-news-blog-recipes-detail/culture-news-blog-recipes-detail-infomation/culture-news-blog-recipes-detail-infomation.component';
import { BusinessFormComponent } from './pages/business/business-form/business-form.component';

import { AboutusCareerFormComponent } from './pages/aboutus/aboutus-career/aboutus-career-form/aboutus-career-form.component';


import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { RecruitmentBenefitsComponent } from './pages/recruitment/recruitment-benefits/recruitment-benefits.component';
import { RecruitmentFirstComponent } from './pages/recruitment/recruitment-first/recruitment-first.component';
import { RecruitmentFormComponent } from './pages/recruitment/recruitment-form/recruitment-form.component';
import { RecruitmentJoinUsComponent } from './pages/recruitment/recruitment-join-us/recruitment-join-us.component';

import { HistoryComponent } from './pages/history/hisroty.component';
import { UserComponent } from './pages/user/user.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormReservationComponent } from './pages/form-reservation/form-reservation.component';

import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TimepickerModule } from 'ngx-bootstrap';
import { PolicyComponent } from './pages/policy/policy.component';
import { PaymentMethodComponent } from './pages/payment-method/payment-method.component';
import { ShareComponent } from './pages/share/share.component';
import { SiteMapComponent } from './pages/site-map/site-map.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    SafeHtmlPipe,
    AppComponent,

    AboutusComponent,

    ProductsComponent,

    CultureComponent,

    ServicesComponent,

    BusinessComponent,

    ShippingReturnComponent,

    EventComponent,

    ContactComponent,

    HeaderComponent,

    FooterComponent,
    FooterRightComponent,
    FooterLeftComponent,
    SubFooterComponent,

    HomeComponent,
    HomeCarouselComponent,

    MainComponent,

    ServiceCarouselComponent,

    AboutusTimelineComponent,
    AboutusStoriesComponent,
    AboutusMissionComponent,

    ProductsMoreComponent,
    ProductsMainComponent,

    BusinessCarouselComponent,
    BusinessFormComponent,

    AboutusCareerComponent,
    AboutusCareerFirstComponent,
    AboutusCareerBenefitsComponent,
    AboutusCareerJoinusComponent,
    AboutusCareerFormComponent,

    CultureNewsBlogComponent,
    CultureNewsBlogLeftComponent,

    CultureNewsBlogDetailComponent,

    CultureNewsBlogGuildComponent,

    CultureNewsBlogDetailCommentsComponent,
    CultureNewsBlogDetailCarouselComponent,
    CultureNewsBlogDetailLeaveMessageComponent,


    CultureNewsBlogRecipesComponent,
    CultureNewsBlogRecipesLeftComponent,

    CultureNewsBlogRecipesDetailComponent,
    CultureNewsBlogRecipesDetailCarouselComponent,
    CultureNewsBlogRecipesDetailCommentsComponent,
    CultureNewsBlogRecipesDetailLeaveMessageComponent,
    CultureNewsBlogRecipesDetailDesciptionComponent,
    CultureNewsBlogRecipesDetailMainContentComponent,
    CultureNewsBlogRecipesDetailInfomationComponent,
    RecruitmentComponent,
    RecruitmentBenefitsComponent,
    RecruitmentFirstComponent,
    RecruitmentFormComponent,
    RecruitmentJoinUsComponent,
    HistoryComponent,
    UserComponent,
    FormReservationComponent,
    PolicyComponent,
    PaymentMethodComponent,
    ShareComponent,
    SiteMapComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })

  ],
  providers: [
    HttpClientModule,
    ScrollTopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
