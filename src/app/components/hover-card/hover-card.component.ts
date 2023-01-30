import { Component, Input, OnInit } from '@angular/core';
import * as data from "../../content/home-page/hover-cards.json";

@Component({
  selector: 'app-hover-card',
  templateUrl: './hover-card.component.html',
  styleUrls: ['./hover-card.component.scss']
})
export class HoverCardComponent implements OnInit {
@Input() pageName: any;
cards: any = (data as any).default;
imageName: any;
title: any;
copy:any;

  constructor() { }

  ngOnInit(): void {
    this.setCardValues();
  }

  setCardValues() {
    this.imageName = this.cards[this.pageName].imageName;
    this.title  = this.cards[this.pageName].title;
    this.copy  = this.cards[this.pageName].copy;
  }

}
