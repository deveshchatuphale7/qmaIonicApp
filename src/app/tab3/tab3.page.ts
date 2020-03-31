import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  dataObj = {
    firstName:"",
    lastName:"",
    age:0,
    gender:"",
    areapincode:"",
    contactNo:""
  }

  public enterDetails(){
    console.log(this.dataObj);

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.http.post('http://localhost:4000/raisedrequests',{"data":this.dataObj},{headers:headers}).subscribe(res=>{
      // console.log(res);
      this.dataObj.firstName = "";
      this.dataObj.lastName = "";
      this.dataObj.age = 0;
      this.dataObj.gender = "";
      this.dataObj.areapincode = "";
      this.dataObj.contactNo = "";
      
    });

  }
  constructor(private http:HttpClient) {}

}
