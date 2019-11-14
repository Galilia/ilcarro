import {Component, ElementRef, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {CarService} from '../../cars/services/car.service';
import {Car} from '../../cars/Car';
import {FormControl, FormGroup} from '@angular/forms';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  uploadForm: FormGroup;
  responseMessage: string;
  formattedAddress: '';
  selectedFile: File = null;
  options = {
    componentRestrictions: {
      country: ['IL']
    }
  };
  private uploadedImages: any = [];


  constructor(private carService: CarService,
              private http: HttpClient) {

  }

  ngOnInit() {
    this.uploadForm = new FormGroup({
      serial_number: new FormControl(''),
      make: new FormControl(''),
      model: new FormControl(''),
      year: new FormControl(''),
      engine: new FormControl(''),
      fuel: new FormControl(''),
      gear: new FormControl(''),
      wheels_drive: new FormControl(''),
      doors: new FormControl(''),
      seats: new FormControl(''),
      fuel_consumption: new FormControl(''),
      distance_included: new FormControl(''),
      car_class: new FormControl(''),
      price_per_day: new FormControl(''),
      features: new FormControl(''),
      about: new FormControl(''),
    });
  }

  addCar() {
    if (this.uploadForm === undefined) {
      return;
    } else {
      const car: Car = {
        serial_number: this.uploadForm.value.serial_number,
        make: this.uploadForm.value.make,
        model: this.uploadForm.value.model,
        year: this.uploadForm.value.year,
        engine: this.uploadForm.value.engine,
        fuel: this.uploadForm.value.fuel,
        gear: this.uploadForm.value.gear,
        wheels_drive: this.uploadForm.value.wheels_drive,
        doors: +this.uploadForm.value.doors,
        seats: +this.uploadForm.value.seats,
        fuel_consumption: +this.uploadForm.value.fuel_consumption,
        features: [],
        car_class: this.uploadForm.value.car_class,
        price_per_day: +this.uploadForm.value.price_per_day,
        distance_included: +this.uploadForm.value.distance_included,
        about: this.uploadForm.value.about,
        pick_up_place: {
          place_id: this.carService.locationInfo.place_id,
          latitude: +this.carService.locationInfo.latitude,
          longitude: +this.carService.locationInfo.longitude,
        },
        image_url: this.uploadedImages
      };

      console.log(car);
      this.carService.addCar(car)
        .then(
          (resp) => {
            this.responseMessage = 'New Car was added';
            console.log(resp);
            this.uploadForm.reset();
          },
          err => alert(err.error.status + ' error')
        );
    }
  }

  onFileSelected(event) {
    // console.log(event);
    this.selectedFile = event.target.files[0] as File;
    // console.log('file: ', this.selectedFile);
  }

  getLocationData() {
    this.carService.getLocation(this.formattedAddress);

  }

  public handleAddressChange(address: any) {
    this.formattedAddress = address.formatted_address;
  }

  onUpload() {
    const fd = new FormData();
    fd.append('upload_preset', environment.cloudDinary.upload_preset);
    // fd.append('folder', `ilCarr/cars_img/${btoa(JSON.parse(localStorage.getItem('token')).user.email)}`);
    fd.append('tags', 'browser_upload');
    fd.append('file', this.selectedFile);
    this.http.post<any>(environment.cloudDinary.cloudinary_URL, fd).subscribe(data => {
      this.uploadedImages.push(data.url);
      console.log('photo address ', this.uploadedImages);
      this.selectedFile = null;
    });
  }
}
