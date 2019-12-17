import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable, of } from 'rxjs';




@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient) { }

  private allPersons;

  getAll() {
    if (this.allPersons) {      
      return of(this.allPersons);
    }

    return this.http.get('assets/data/people.json')
      //.pipe(map<any, Person[]>(res => res.json()));
      .pipe(data => { data.subscribe(d => this.allPersons = d); return data });
  }

  search(q: string): Observable<any> {
    if (!q || q === '*') {
      q = '';
    } else {
      q = q.toLowerCase();
    }

    if (q.length === 0) {
      return this.getAll();
    } else {
      return this.getAll()
        .pipe(map<Person[], Person[]>(data => data.filter(item => JSON.stringify(item).toLowerCase().includes(q))));
    }
  }

  get(id: number) {
    return this.getAll()            
    .pipe(map<Person[], Person>(all => {
      // if (localStorage['person' + id]) {
      //   return JSON.parse(localStorage['person' + id]);
      // }
      return all.find(e => e.id === id);
    }));
  }

  save(person: Person) {
    let index = this.allPersons.findIndex(e => e.id === person.id);
    if(index < 0)
      this.allPersons.push(person)
    else 
    this.allPersons[index]
    //localStorage['person' + person.id] = JSON.stringify(person);
  }

}

export class Address {
  street: string;
  city: string;
  state: string;
  zip: string;

  constructor(obj?: any) {
    this.street = obj && obj.street || null;
    this.city = obj && obj.city || null;
    this.state = obj && obj.state || null;
    this.zip = obj && obj.zip || null;
  }
}

export class Person {
  id: number;
  name: string;
  phone: string;
  address: Address;

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.phone = obj && obj.phone || null;
    this.address = obj && obj.address || null;
  }
}