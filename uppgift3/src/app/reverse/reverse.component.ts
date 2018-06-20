import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.css']
})
export class ReverseComponent implements OnInit {

  @Input() myString: String = "";

  constructor() { }

  ngOnInit() {
  }

  reverseFunction(string: String):String {
    return string.split("").reverse().join("");
  }
}
