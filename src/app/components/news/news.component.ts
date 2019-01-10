import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {TileClass} from '../../tile-class';
import {HttpClient, HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Output() myDlEvent = new EventEmitter<string>();
  callParentDownload(name) {
    this.myDlEvent.emit('https://haurtorrent.herokuapp.com/download?id=' + name.id);
  }
heroes: string[] = [ 'Object1', 'Object2', 'Object3'];
tiles: TileClass[];
url = 'https://haurtorrent.herokuapp.com/';
myids: string[] = [ 'idnews1', 'idnews2', 'idnews3'];
rating = [1, 3, 5];
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    console.log('Trying to get news tiles too');
      const geturl = 'https://haurtorrent.herokuapp.com/latest';
      this.http.get(geturl).subscribe(
        (res: any[]) => {
          console.log(res);
          this.tiles = res;
          console.log('Got news tiles');
        }
      );

  }
  doNewDl( name )
  {
    this.callParentDownload(name);
    //window.open('https://haurtorrent.herokuapp.com/download?id=' + name.id);
  }
  doRate( name)
  {

    console.log((<TileClass>name).id);
    const url = this.url + `api/rate?id=${name.id}&mark=${name.rating}`;
    this.http.get(url).subscribe(
      res  => {
        console.log(res);
      }
    );
  }
}
