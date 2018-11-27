import { Component, OnInit } from '@angular/core';
import {AppModule} from '../../../app.module';
import {AppComponent} from '../../../app.component';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  myVar: string;


  constructor(public parent: AppComponent) { }

  ngOnInit() {

  }

  someAction() {
    this.parent.myVar = this.myVar;
    console.log('123');
  }
}
