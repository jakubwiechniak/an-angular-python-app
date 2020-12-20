import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    
  }

  

  getData(endpoint){
    return this.http.get('https://isjeifieowoewrpoorie23a.herokuapp.com/' + endpoint)
  }

  
}
