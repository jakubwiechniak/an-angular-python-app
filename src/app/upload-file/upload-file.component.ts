import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  FileUpload: FormGroup;
  submitted = false;
  success = false;
  fileSent: Boolean;
  logged = "False";
  constructor(private formBuilder: FormBuilder, private data: DataService, private http: HttpClient, private cookieService: CookieService, private router: Router) {
    this.FileUpload = this.formBuilder.group({
      file: ['', Validators.required]
    })
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.FileUpload.get('profile').value);

    this.http.post('https://isjeifieowoewrpoorie23a.herokuapp.com/plik', formData).subscribe(
      (res) => {
        console.log(res)
        if (res == "Failed") {
          this.fileSent = false
        } else {
          this.fileSent = true
        }
      },
      (err) => console.log(err)
    );
  }
  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.FileUpload.get('profile').setValue(file);
    }
  }
  ngOnInit() {
    this.FileUpload = this.formBuilder.group({
      profile: ['']
    });
    this.logged = this.cookieService.get('Logged')
  }

  moveToLogIn() {
    this.router.navigateByUrl('/contact')
  }
}
