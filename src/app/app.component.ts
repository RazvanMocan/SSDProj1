import { Component } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SSDProj';
  tiles= [
    {text: 'One', cols: 3, rows: 3, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 3, rows: 3, color: 'lightpink'},
    {text: 'Four', cols: 3, rows: 3, color: '#DDBDF1'},
    {text: 'One', cols: 3, rows: 3, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 3, rows: 3, color: 'lightpink'},
    {text: 'Four', cols: 3, rows: 3, color: '#DDBDF1'},
    {text: 'One', cols: 3, rows: 3, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 3, rows: 3, color: 'lightpink'},
    {text: 'Four', cols: 3, rows: 3, color: '#DDBDF1'},
  ];
  rating=5;
  public myVar: string;

}
