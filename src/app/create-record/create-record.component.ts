import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.scss']
})
export class CreateRecordComponent implements OnInit {

  tables: Object;
  columns: Object;
  insertForm: FormGroup;
  tableOutput: Object;
  tableToInsert: String;
  logged= "False";

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private cookieService: CookieService, private router: Router) {

  }

  

  ngOnInit(): void {
    this.logged = this.cookieService.get('Logged')
    if(this.logged == "True"){
      this.getTables().then(data => {
        this.tables = data
      })
    }

  }


  selectChange(tab){
    this.tableToInsert = tab
    this.getColumns(tab).then(data => {
      this.columns = data
      var dataArr = []
      Object.keys(data).map(function(key){  
        dataArr.push(data[key])  
        return dataArr;  
      });
      let obj = {}
      dataArr.forEach(elem => {  
        obj[elem] = ""
      })
      this.insertForm = this.formBuilder.group(obj)
      this.columns = dataArr
    })
  }

  getColumns(tab){
    return this.http.post("https://isjeifieowoewrpoorie23a.herokuapp.com/getcolumn", {table: tab}).toPromise()
  }

  getTables(){
    return this.http.post("https://isjeifieowoewrpoorie23a.herokuapp.com/gettable", {pass: "teXato21ts"}).toPromise()
  }

  onSubmit(){
    this.insertUserRow().then(data => {
      this.tableOutput = data
      window.scroll(0,0)
    })
  }

  insertUserRow(){
    return this.http.post("https://isjeifieowoewrpoorie23a.herokuapp.com/insertrow", {dict : this.insertForm.value, table: this.tableToInsert}).toPromise()
  }

  moveToLogIn(){
    this.router.navigateByUrl('/contact')
  }
}
