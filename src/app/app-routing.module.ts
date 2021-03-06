import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './shared/home/home.component';
import {SignUpComponent} from './users/sign-up/sign-up.component';
import {LoginComponent} from './users/login/login.component';
import {UploadComponent} from './shared/upload/upload.component';
import {SearchComponent} from './shared/search/search.component';
import {ViewComponent} from './shared/view/view.component';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {AuthGuard} from './users/auth.guard';

const routes: Routes = [
  {path: 'main', component: HomeComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'search', component: SearchComponent},
  {path: 'view', component: ViewComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', redirectTo: 'error'}
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
