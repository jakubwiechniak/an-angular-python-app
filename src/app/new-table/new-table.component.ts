import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.scss']
})
export class NewTableComponent implements OnInit {

  newTableForm : FormGroup;
  tableOutput: Object;
  previousTitle: String;
  submitted = false;
  success = false;
  index = 0;
  logged="False";

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.logged=this.cookieService.get('Logged')
    if(this.logged=='True'){
      this.newTableForm = this.formBuilder.group({
        title: ['', Validators.required],
        index: [true, ],
        new_column: this.formBuilder.array([this.formBuilder.group({
        column: ['', Validators.required],
        type: ['', Validators.required],
        size: ['', ],
        notnull: [false, ],
        defval: ['', ]
      })])
      })
  }
  }

  

  get newColumn(){
    return this.newTableForm.get('new_column') as FormArray;
  }

  addNewColumn(){
    this.newColumn.push(this.formBuilder.group({column: ['', Validators.required],type:['', Validators.required], size: '', notnull: false, defval: ''}));
    this.index ++;

  }

  deleteExistingColumn(index){
    this.newColumn.removeAt(index);
  }
  

  onSubmit(){
    this.submitted = true;

    if(this.newTableForm.invalid){
      return;
    }

    this.success = true;
    if(this.success){
      this.postNewTableForm().then(data => {
        this.tableOutput = data
        window.scroll(0,0)
        if(this.tableOutput == "Success!"){
          this.router.navigateByUrl('/createdt')
        }
      })
      this.previousTitle = this.newTableForm.controls.title.value;
    }
  }

  postNewTableForm(){
    return this.http.post("https://isjeifieowoewrpoorie23a.herokuapp.com/createtable", this.newTableForm.value).toPromise()
  }

  moveToLogIn(){
    this.router.navigateByUrl('/contact')
  }
}
