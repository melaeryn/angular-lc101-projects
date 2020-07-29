import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Squee~! I love these pics~';
  image1 = 'https://pbs.twimg.com/media/EHBAIUgWkAA1jK2.jpg';
  image2 = 'https://i.redd.it/3d3mrxemymu21.jpg';
  image3 = 'https://pbs.twimg.com/media/EVFpra6UEAAza9K.jpg';

  constructor() { }

  ngOnInit() {
  }

}