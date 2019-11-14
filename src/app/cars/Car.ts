import {FormControl} from '@angular/forms';

export interface Car {
  serial_number: string;
  make: string;
  model: string;
  year: string;
  engine: string;
  fuel: string;
  gear: string;
  wheels_drive: string;
  doors: number;
  seats: number;
  fuel_consumption: number;
  features: [];
  car_class: string;
  price_per_day: number;
  distance_included: number;
  about: string;
  pick_up_place: {
    place_id: string;
    latitude: number;
    longitude: number;
  };
  image_url: [];
}
