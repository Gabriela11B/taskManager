import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  constructor(private http: HttpClient) { }
  
  
titleTask: string = ''
dataM: any =[]
getData: any = []



submitForm(form: NgForm) {


  this.http.post('http://localhost:3001/post', {dataM: this.dataM}).subscribe(() => {
    console.log('Task created successfully');
  })}

}
