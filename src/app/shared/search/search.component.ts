import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {CarService} from '../../cars/services/car.service';
import {Options} from 'ng5-slider';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
  currentSubMenu: string;
  buttSel = true;
  lat = 51.678418;
  lng = 7.809007;

  minValue = 100;
  maxValue = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    selectionBarGradient: {
      from: 'black',
      to: 'black'
    }

  };



  constructor(private router: Router,
              private carService: CarService
              // private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentSubMenu = 'search';
  }

  goToSearchPage() {
    this.currentSubMenu = 'search';
    // this.router.navigate(['/search']);
  }

  goToFilterPage() {
    this.currentSubMenu = 'filters';
    // this.router.navigate(['/filters']);
  }

  goToMapPage() {
    this.currentSubMenu = 'map';
    // this.router.navigate(['/map']);
  }

  onLocation(event) {
    // const inputValue = event.target.value;
    this.carService.searchRequest.city = event.target.value;
    console.log(this.carService.searchRequest.city);
    this.carService.searchCar(this.carService.searchRequest);
    // return inputValue;
  }

  onStartDate(event) {
    this.carService.searchRequest.start_date = (new Date(event.target.value)).toDateString();
    console.log(this.carService.searchRequest.city);
    this.carService.searchCar(this.carService.searchRequest);
  }

  onEndDate(event) {
    this.carService.searchRequest.end_date = event.target.value.toString();
    console.log(this.carService.searchRequest.city);
    this.carService.searchCar(this.carService.searchRequest);
  }

  onMinAmount() {
    this.carService.searchRequest.min_amount = this.minValue.toString();
    this.carService.searchCar(this.carService.searchRequest);
  }

  onMaxAmount() {
    this.carService.searchRequest.max_amount = this.maxValue.toString();
    this.carService.searchCar(this.carService.searchRequest);
  }

  onLowToHigh() {
    this.buttSel = true;
    this.carService.searchRequest.ascending = (this.buttSel).toString();
    this.carService.searchCar(this.carService.searchRequest);
  }

  onHighToLow() {
    this.buttSel = false;
    this.carService.searchRequest.ascending = (this.buttSel).toString();
    this.carService.searchCar(this.carService.searchRequest);
  }

}
