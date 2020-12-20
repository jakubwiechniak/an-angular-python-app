import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  logged="False";
  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.logged=this.cookieService.get('Logged');
  }

  moveToSingleRecord(){
    this.router.navigateByUrl('/newrecord')
  }
  moveToFileUpload(){
    this.router.navigateByUrl('/uploadfile')
  }

  moveToLogIn(){
    this.router.navigateByUrl('/contact')
  }

}
