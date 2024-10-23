import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { FormsModule } from '@angular/forms';
import {NgxUiLoaderModule} from "ngx-ui-loader";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxUiLoaderModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
