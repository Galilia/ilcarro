import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectValidators} from '../project.validators';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {Auth} from '../interfaces/Auth';
import {UserService} from '../services/user.service';
import {User} from '../interfaces/User';
import {CarService} from '../../cars/services/car.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  newForm: FormGroup;
  // responseMessage = '';
  isAuth = false;
  email = localStorage.getItem('email');
  password = localStorage.getItem('password');
  isUpdate = false;

  constructor(
    private auth: AuthService,
    private user: UserService,
    private carService: CarService
  ) {
  }

  ngOnInit() {
    if (this.email != null && this.password != null) {
      this.isAuth = true;
    }
    this.form = new FormGroup({
      // validators
      email: new FormControl('', [
        Validators.email,
        Validators.required], [ProjectValidators.uniqEmail]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  login() {
    // if (this.form.valid) {
    //   console.log('Form submitted: ', this.form);
    //   const formData = {...this.form.value};
    //   console.log(formData);
    // }
    const auth: Auth = this.form.value;
    this.auth.login(auth.email, auth.password).subscribe(
      (resp) => {
        // this.responseMessage = 'Login success';
        console.log(resp);
        this.form.reset();
        setTimeout(() => {
          this.isAuth = true;
        }, 1000);
        // this.router.navigate(['/search']).then();
      },
      err => alert(err.error.status + ' login error')
    );
  }

  openUpdate() {
    this.isUpdate = true;
  }

  update() {
    const newUser: User = this.newForm.value;
    this.user.updateUser(newUser, this.password);
    this.isUpdate = false;
  }

  delete() {
    // console.log(this.email + this.password);
    this.user.deleteUser(this.email, this.password).then();
    localStorage.removeItem('token');
    this.isAuth = false;
  }

  logout() {
    this.isAuth = false;
    localStorage.removeItem('token');
  }

  getUserCar() {
    console.log(this.carService.ownerGetCarById());
  }

}
