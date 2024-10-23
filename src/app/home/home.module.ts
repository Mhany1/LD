import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { ThingsWeDoComponent } from './components/things-we-do/things-we-do.component';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { CardNewsComponent } from './components/card-news/card-news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ThingsWeDoComponent,
    TopNewsComponent,
    CardNewsComponent,
    NewsDetailsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
