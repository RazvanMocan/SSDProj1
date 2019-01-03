import {getLocaleDateFormat} from '@angular/common';

export class TileClass {
  // text: String;
  id: number;
  name: String;
  downloads: number;
  path: String;
  // uploader: User;
  // rating: Rating[];
  uploadTime: Date;
  constructor()
  {
    this.id = 12;
    this.name = 'ab';
    this.downloads = 23;
    this.path = 'ab';
    this.uploadTime = new Date();
  }
  /*rating = 0;
  cols = 0;
  rows = 0;
  color = '';
  */
}
