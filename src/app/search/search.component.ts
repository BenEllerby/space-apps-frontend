import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() showOtherGraphs = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickedOnce() {
  	this.showOtherGraphs.emit();
  }

}
