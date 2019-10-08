import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectValidators} from '../../project.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      // validators
      email: new FormControl('', [
        Validators.email,
        Validators.required], [ProjectValidators.uniqEmail]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      // address: new FormGroup({
      //   country: new FormControl('ru'),
      //   city: new FormControl('', Validators.required)
      // })
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form submitted: ', this.form);
      const formData = {...this.form.value};
      console.log(formData);
    }
    this.form.reset();
  }

}
