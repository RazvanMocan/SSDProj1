import {Component, NgModule, OnInit} from '@angular/core';

// import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({

    // [MatButtonToggleModule]

})

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
name: string;
param2 = 'I am param2';
param3 = 'I am param3';
  constructor() {
    console.log('this ran');
  }

  ngOnInit() {
console.log('this ran');
this.name = 'Iz me';
  }
  deletetxt(mystr) {
    if (mystr === '') {
      this.name = 'me';
    } else {
      this.name = '';
    }
  }
}
