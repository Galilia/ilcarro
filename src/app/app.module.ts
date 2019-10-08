import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { BaseInfoComponent } from './shared/base-info/base-info.component';
import { HomeComponent } from './shared/home/home.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import { LoginComponent } from './shared/login/login.component';
import { UploadComponent } from './shared/upload/upload.component';
import { ViewComponent } from './shared/view/view.component';
import { SearchComponent } from './shared/search/search.component';
import { NavSearchComponent } from './shared/nav-search/nav-search.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

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
    NavSearchComponent,
    GalleryComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
