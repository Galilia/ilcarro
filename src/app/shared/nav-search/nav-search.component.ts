import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent implements OnInit {
  private searchPageClick: Promise<boolean>;
  private filterPageClick: Promise<boolean>;
  private mapPageClick: Promise<boolean>;
  searchPageIcon = 'assets/icons/search-icon.png';
  filterPageIcon = 'assets/icons/equal-icon.png';
  mapPageIcon = 'assets/icons/coord-icon.png';
  bgSearchPage = '#EA2340';
  bgFilterPage = '#062639';
  bgMapPage = '#6C7E8B';
  searchVariable: boolean ;
  filterVariable: boolean ;
  mapVariable: boolean;
  option1: {'red', 'black', 'grey'};
  option2: {'black', 'grey', 'red'};
  options3: {'grey', 'black', 'red'};


  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSearchPage() {
    this.router.navigate(['/search']);
  }

  goToFilterPage() {
    this.router.navigate(['/filters']);
  }

  goToMapPage() {
    this.router.navigate(['/map']);
  }

  // onClickSearch($event) {
  //
  //   console.log("Search clicked", this.searchVariable, this.filterVariable, this.mapVariable);
  // }
  //
  // onClickFilter($event) {
  //   this.searchVariable = false;
  //   this.filterVariable = $event.target.id === 'imageInSelMenu2' ? true : false;
  //   this.mapVariable = false;
  // }
  //
  // onClickMap($event) {
  //   this.searchVariable = false;
  //   this.filterVariable = false;
  //   this.mapVariable = $event.target.id === 'imageInSelMenu3' ? true : false;
  // }

  onClick($event) {
    if ($event.target.id === 'imageInSelMenu1') {
      this.searchVariable = true;
      this.filterVariable = false;
      this.mapVariable = false;
    }
    if ($event.target.id === 'imageInSelMenu2') {
      this.searchVariable = false;
      this.filterVariable = true;
      this.mapVariable = false;
    }
    if ($event.target.id === 'imageInSelMenu3') {
      this.searchVariable = false;
      this.filterVariable = false;
      this.mapVariable = true;
    }
    console.log("State: ", this.searchVariable, this.filterVariable, this.mapVariable);

  }
}
