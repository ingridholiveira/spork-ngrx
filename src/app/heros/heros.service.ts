import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HerosService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>('https://swapi.py4e.com/api/people');
  }
}
