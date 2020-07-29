import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["https://melaeryn.tumblr.com/", "https://hechtheid.tumblr.com/", "https://www.dndbeyond.com/", "http://nooooooooooooooo.com/"];
  constructor() { }

  ngOnInit() {
  }

}
