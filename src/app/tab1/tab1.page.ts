import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  symptomsObj = {
    "symptomsCough":false,
    "symptomsBreathing":false,
    "symptomsFever":false,
    "symptomsTiredness":false
  }

  triggerAlert(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.http.post('http://localhost:4000/raisedalert',{...this.symptomsObj,"id":"dbc312f0-733f-11ea-96da-57a9a01cbba8"},{headers:headers}).subscribe(res=>{
      console.log(res);
    });
  }
  constructor(private http:HttpClient) {}

}
