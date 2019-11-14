import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { BaseInfoComponent } from './shared/base-info/base-info.component';
import { HomeComponent } from './shared/home/home.component';
import {SignUpComponent} from './users/sign-up/sign-up.component';
import {LoginComponent} from './users/login/login.component';
import { UploadComponent } from './shared/upload/upload.component';
import { ViewComponent } from './shared/view/view.component';
import { SearchComponent } from './shared/search/search.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import {AgmCoreModule} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {CarsModule} from './cars/cars.module';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {FileUploadModule} from 'ng2-file-upload';
import {CloudinaryModule} from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
import {environment} from '../environments/environment';
import {Ng5SliderModule} from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BaseInfoComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    UploadComponent,
    ViewComponent,
    SearchComponent,
    GalleryComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4ns-WX7nqi4rj8OLcWtU2Fy0Y_XCVLe8'
    }),
    GooglePlaceModule,
    FileUploadModule,
    CloudinaryModule.forRoot(Cloudinary, {cloud_name: environment.cloudDinary.cloud_name}),
    Ng5SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
