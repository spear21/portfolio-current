import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mobile: boolean = false;
  ngOnInit(): void {
    window.addEventListener("resize", (event) => {
      this.mobile = this.checkScreenSize();
    });
  this.mobile = this.checkScreenSize();
  window.onresize = (event) => {

  }
}

checkScreenSize() {
  if (window.innerWidth < 1024) {
    return true;
  } else {
    return false;
  }
}
}
