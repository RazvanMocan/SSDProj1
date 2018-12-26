import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Output() myEvent = new EventEmitter<string>();

  callParent() {
    this.myEvent.emit('eventDesc');
  }
@Input() usid: string = "";
pwd: string = "";
log: string ="Login";
loggeduser : string= "";

  constructor() { }

  ngOnInit() {
  }
onLogin()
{

//this.usid="Logged";
//this.pwd=" in";
console.log(this.usid);
console.log(this.pwd)
if (this.usid === 'Logged')
  if (this.pwd === 'in')
    this.showUser();


}


showUser()
{
  if (this.log === 'Logout')
    this.log = 'Login';
  else if( this.log === 'Login')
    this.log = 'Logout';
  console.log("asddd");
  this.loggeduser = this.usid;
  //this.log = "Logout";
  console.log(this.loggeduser);
  this.callParent();

}
  getStyle() {
      return -15;
  }
}
