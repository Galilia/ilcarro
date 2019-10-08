import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  currentSubMenu: string;

  constructor(private router: Router,
              // private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // get url info after / to understand on which page we are
    // this.route.params.subscribe((params: Params) =>  {
    //   this.currentHrefParam = this.router.url;
    //   console.log('Params', this.currentHrefParam);
    // });
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
}
