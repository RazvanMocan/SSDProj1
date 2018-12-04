import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
usid: string = "";
pwd: string = "";
  constructor() { }

  ngOnInit() {
  }
onLogin()
{

this.usid="Logged";
this.pwd=" in";

}
}
