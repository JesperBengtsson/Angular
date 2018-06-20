import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-hide',
  templateUrl: './show-hide.component.html',
  styleUrls: ['./show-hide.component.css']
})
export class ShowHideComponent implements OnInit {

  showText = true;
  btnText = "show"; 

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if (this.showText) {
      this.btnText = 'hide';
      this.showText = false;  
    }
    else if (!this.showText) {
      this.btnText = 'show';
      this.showText = true;
    }
  }
  
  

}
