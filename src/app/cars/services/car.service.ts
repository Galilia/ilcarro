import {Injectable} from '@angular/core';
import {Car} from '../Car';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {AuthService} from '../../users/services/auth.service';
import {Observable} from 'rxjs';
import {GoogleMapsAPIWrapper, MapsAPILoader} from '@agm/core';
import {google} from '@agm/core/services/google-maps-types';

const serverUrl = 'https://rent-cars-app.herokuapp.com';
const urlAgm = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

// const urlAutoCom ='https://maps.googleapis.com/maps/api/js';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  dataJson: any;
  locationInfo = {
    place_id: '',
    latitude: 0,
    longitude: 0,
  };
  searchRequest = {
    city: '',
    start_date: '',
    end_date: '',
    min_amount: '',
    max_amount: '',
    ascending: '',
    items_on_page: '',
    current_page: '',
  };

  constructor(private http: HttpClient,
              private auth: AuthService) {
  }

  addCar(car: Car): Promise<Car> {
    const authHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + this.auth.getToken()
      }
    );
    return this.http.post<Car>(serverUrl + '/car', {
      serial_number: car.serial_number,
      make: car.make,
      model: car.model,
      year: car.year,
      engine: car.engine,
      fuel: car.fuel,
      gear: car.gear,
      wheels_drive: car.wheels_drive,
      doors: car.doors,
      seats: car.seats,
      fuel_consumption: car.fuel_consumption,
      features: [car.features],
      car_class: car.car_class,
      price_per_day: car.price_per_day,
      distance_included: car.distance_included,
      about: car.about,
      pick_up_place: {
        place_id: car.pick_up_place.place_id,
        latitude: car.pick_up_place.latitude,
        longitude: car.pick_up_place.longitude,
      },
      image_url: [car.image_url],
    }, {headers: authHeader}).toPromise();

  }

  getCarById(id) {
    const httpOptions = {
      headers: new HttpHeaders({
          Authorization: 'Basic ' + this.auth.getToken()
        },
      ),
    };
    return this.http.get(serverUrl + '/car?serial_number=400-40-400', httpOptions);
  }

  ownerGetCarById() {
    const httpOptions = {
      headers: new HttpHeaders({
          Authorization: 'Basic ' + this.auth.getToken()
        },
      ),
    };
    return this.http.get(serverUrl + '/user/cars/car?serial_number=400-40-400', httpOptions)
      .subscribe(res => {
        console.log(res);
      });
  }

  getLocation(location) {
    return this.http.get(urlAgm + location + '&key=AIzaSyA4ns-WX7nqi4rj8OLcWtU2Fy0Y_XCVLe8')
      .subscribe((res) => {
        this.dataJson = res;
        this.locationInfo.place_id = this.dataJson.results[0].place_id;
        this.locationInfo.latitude = this.dataJson.results[0].geometry.location.lat;
        this.locationInfo.longitude = this.dataJson.results[0].geometry.location.lng;
        // console.log(res);
        // console.log(this.dataJson.results[0].place_id, this.dataJson.results[0].
        // geometry.location.lat, this.dataJson.results[0].geometry.location.lng);
      });
  }

  searchCar(searchRequest) {

    let params = new HttpParams();
    if (searchRequest.city !== '') {
      params = params.append('city', searchRequest.city);
    }
    if (searchRequest.start_date !== '') {
      params = params.append('start_date', searchRequest.start_date);
    }
    if (searchRequest.end_date !== '') {
      params = params.append('end_date', searchRequest.end_date);
    }
    if (searchRequest.min_amount !== '') {
      params = params.append('min_amount', searchRequest.min_amount);
    }
    if (searchRequest.max_amount !== '') {
      params = params.append('max_amount', searchRequest.max_amount);
    }
    if (searchRequest.ascending !== '') {
      params = params.append('ascending', searchRequest.ascending);
    }
    if (searchRequest.items_on_page !== '') {
      params = params.append('items_on_page', searchRequest.items_on_page);
    }
    if (searchRequest.current_page !== '') {
      params = params.append('current_page', searchRequest.current_page);
    }
    const httpOptions = {
      params,
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.auth.getToken(),
      }),
    };
    console.log('Print:' + this.http.get(''));
    return this.http.get(serverUrl, httpOptions).subscribe(res => {
      console.log(res);
    });
  }

}
