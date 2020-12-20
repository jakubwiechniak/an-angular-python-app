import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-created-tab-output',
  templateUrl: './created-tab-output.component.html',
  styleUrls: ['./created-tab-output.component.scss']
})
export class CreatedTabOutputComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  returnToMainPage(){
    this.router.navigateByUrl('/newtable')
  }
}
