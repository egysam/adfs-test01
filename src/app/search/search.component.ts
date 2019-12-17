import { Component } from '@angular/core';
import { Person, SearchService } from '../shared';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public query: string;
  public searchResults: any; // Array<Person>;  

  sub: Subscription;

  constructor(private searchService: SearchService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      if (params['term']) {
        this.query = decodeURIComponent(params['term']);
        this.search(null);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  search(keyEvent): void {

    if (!keyEvent || (keyEvent.keyCode === 13) || (this.query.length > 2) || (this.query.length === 0)) {
      this.searchService.search(this.query).subscribe(
        data => {
          this.searchResults = data;
          console.log('searchService data :::');
          console.log(data);
        },
        error => console.log(error)
      );
    }
  }
}
