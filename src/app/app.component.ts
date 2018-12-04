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
  isAdmin = 1;
  tiles = [
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
  tilesUsers = [
    {text: 'User1', cols: 3, rows: 3, color: 'lightblue'},
    {text: 'User2', cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'User3', cols: 3, rows: 3, color: 'lightpink'},
    {text: 'User4', cols: 3, rows: 3, color: 'lightblue'},
    {text: 'User5', cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'User6', cols: 3, rows: 3, color: 'lightpink'},
    {text: 'User7', cols: 3, rows: 3, color: 'lightblue'},
    {text: 'User8', cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'User9', cols: 3, rows: 3, color: 'lightpink'}
  ];
  rating = 5;
  public myVar: string;
getStyle()
{
  if (this.isAdmin==0)
    return -5;
  return 5;
}
  getStyle2()
  {
    if (this.isAdmin!=0)
      return -5;
    return 5;
  }
}
