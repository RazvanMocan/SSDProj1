import { Component } from '@angular/core';

import {TopBarComponent} from './components/top-bar/top-bar.component';
/*import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
*/
import { TileClass} from './tile-class';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  //directives: [TopBarComponent]
})
export class AppComponent {


  // title = 'SSDProj';
  isAdmin = 1;
  isRegister = 1;
  download = 'Download';
  regId = '';
  regPwd = '';
  regMail = '';
  completeRegId = '';
  completeRegPwd = '';
  completeRegMail = '';
  downloadNews = 'Ban';
  successOpacity = 0;
  tiles = [
    {text: 'One', rating: 8, cols: 3, rows: 3, color: 'lightblue'},
    {text: 'Two', rating: 2, cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'Three', rating: 5, cols: 3, rows: 3, color: 'lightpink'},
    {text: 'Four', rating: 8, cols: 3, rows: 3, color: '#DDBDF1'},
    {text: 'One', rating: 8, cols: 3, rows: 3, color: 'lightblue'},
    {text: 'Two', rating: 10, cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'Three', rating: 8,  cols: 3, rows: 3, color: 'lightpink'},
    {text: 'Four', rating: 1,  cols: 3, rows: 3, color: '#DDBDF1'},
    {text: 'One', rating: 8,  cols: 3, rows: 3, color: 'lightblue'},
    {text: 'Two', rating: 8,  cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'Three', rating: 8,  cols: 3, rows: 3, color: 'lightpink'},
    {text: 'Four', rating: 8,  cols: 3, rows: 3, color: '#DDBDF1'},
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
  tile1 = new TileClass();
  rating = 1;
  selectedFile: File = null;
  url = 'http://localhost:7070/';
  public myVar: string;
  constructor(private http: HttpClient) {
  }
  createTile(tile: TileClass): Observable<TileClass> {
    return this.http.post<TileClass>(this.url, tile);
  }
  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload()
  {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post(this.url,fd).subscribe(
      res => {
        console.log(res);
      }
    );
    console.log(this.selectedFile.name);
  }
  getStyle() {
  if (this.isAdmin == 0)
    return -5;
  return 5;
}
  getStyle2() {
    if (this.isAdmin !=0) {
      return -5;
    }
    return 5;
  }
  changeStyleRegister1()
  {
    this.isRegister = 0;
  }
  changeStyleRegister2()
  {
    this.isRegister = 1;
  }
  getStyleRegister1() {
    if (this.isRegister == 0)
      return -5;
    return 5;
  }
  getStyleRegister2() {
    if (this.isRegister != 0)
      return -5;
    return 5;
  }
  getSpecStyle(event) {
    this.isAdmin=0;
    if (this.isAdmin === 0)
      return -5;
    return 5;
  }
  onLeaveAdmin(event)
  {
    this.isAdmin=1;
  }


  //placeholders for download and ban procedure >
  doDownload1()
  {
    if(this.download === 'Download')
  this.download='Downloaded';
    else
      this.download = 'Download';
  this.createTile(this.tile1);
  }
  doDownload2()
  {
    if(this.downloadNews === 'Ban')
      this.downloadNews='Unban';
    else
      this.downloadNews = 'Ban';
  }
  signUp()
{


  if ((this.regMail !== '') && (this.regId !== '') && (this.regPwd !== '') && (this.regMail.endsWith('.com'))){
    this.setOpacityBriefly();
    this.completeRegId = this.regId;
    this.completeRegPwd = this.regPwd;
    this.completeRegMail = this.regMail;
    this.regId = '';
    this.regPwd = '';
    this.regMail = '';
  }


}
getSuccessOpacity()
{
  return this.successOpacity;
}
  setOpacityBack()
{
  this.successOpacity = 0;
}
  setOpacityBriefly()
  {

  this.successOpacity = 1;

}
}
