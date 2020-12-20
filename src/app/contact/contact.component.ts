import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  success = false;
  logged="False";
  loginOutput: String;


  constructor(private formBuilder: FormBuilder,private data: DataService, private http: HttpClient, private cookieService: CookieService) {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }

    this.success = true;
    if(this.success){
      this.tryLogIn().then(data =>{
        this.loginOutput = String(data)
        if(data == "Success"){
          this.cookieService.set("Logged", "True")
          this.logged=this.cookieService.get('Logged')
          window.location.reload()
        }else{
          this.cookieService.set("Logged", "False")
          this.cookieService.delete('Logged')
        }
      })
    }
  }

  logOut(){
    this.cookieService.delete('Logged')
    window.location.reload()
  }

  tryLogIn(){
    return this.http.post('https://isjeifieowoewrpoorie23a.herokuapp.com/login', {login: this.loginForm.get("login").value,password: this.loginForm.get("password").value}).toPromise()
  }
  ngOnInit(): void {
    this.logged=this.cookieService.get('Logged')
  }

}
