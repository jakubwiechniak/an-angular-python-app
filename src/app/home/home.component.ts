import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  users: Object;
  path = '';
  logged="False";
  constructor(private data: DataService, private cookieService: CookieService, private router: Router) { }
  
  ngOnInit(): void {
    this.logged = this.cookieService.get('Logged')
  }

  selectSheet(endpoint){
    this.data.getData(endpoint).subscribe(data => {
      this.users = data
      var dataArr = [];  
      Object.keys(data).map(function(key){  
          dataArr.push(data[key])  
          return dataArr;  
      });
      this.users = dataArr
    })
  }

  moveToLogIn(){
    this.router.navigateByUrl('/contact')
  }
}
