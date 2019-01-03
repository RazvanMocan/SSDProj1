import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
heroes: string[] = [ 'Object1', 'Object2', 'Object3'];
myids: string[] = [ 'idnews1', 'idnews2', 'idnews3'];
rating = [1, 3, 5];
  constructor() {

  }

  ngOnInit() {

  }

}
