import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
heroes: string[];
ids: string[] = ['idnews1', 'idnews2', 'idnews3'];
rating = 5;

  constructor(private  httpClient: HttpClient) {

  }

  ngOnInit() {
    this.httpClient.get('http://localhost:7070/api/newest').subscribe(
      (value: any[]) => {
        console.log(this.heroes);
        console.log(value);
        this.heroes = value;
        console.log(this.heroes === value);
      }
    );
  }

}
