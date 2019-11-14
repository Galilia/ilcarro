import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ProjectValidators} from '../project.validators';
import {User} from '../interfaces/User';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  responseMessage = '';

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      // validators
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),]),
      email: new FormControl('', [
        Validators.email,
        Validators.required], [ProjectValidators.uniqEmail]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  // submit(user: User) {
  //   if (this.form.valid) {
  //     console.log('Form submitted: ', this.form);
  //     const formData = {...this.form.value};
  //     console.log(formData);
  //   }
  //   // const user: User = {
  //   //   first_name: this.form.value.name,
  //   //   second_name: this.form.value.lastName,
  //   //   email: this.form.value.email,
  //   //   password: this.form.value.password
  //   // }
  //   this.userService.register(user.first_name, user.second_name, user.email, user.password).subscribe(() => {
  //     this.form.reset();
  //     this.router.navigate(['/search']).then();
  //   });
  // }

  registerUser() {
    if (this.form === undefined) {
      return;
    } else {
      this.userService.registerUser({
        first_name: this.form.value.name,
        second_name: this.form.value.lastName,
        email: this.form.value.email,
        password: this.form.value.password
      }).then(data => {
        // console.log(JSON.stringify(data));
        this.responseMessage = 'Successfully registered';
        setTimeout(() => {
          this.responseMessage = '';
          this.form.reset();
        }, 2000);
      }).catch((error => {
        alert(error.error.status + ' email already exists');
      }));
    }
  }

}
