import { Component, OnInit } from '@angular/core';
import { Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageNames = ['portfolio', 'contact']

  constructor() {

  }

  ngOnInit(): void {

}


}


