import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() animals;
  @Output() graphFilter = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  checkedChange(name: string) {
    console.log("Hit checkedChange");
    let temp = (<HTMLInputElement>document.getElementById(name)).checked;
    if (temp)
    {
      this.graphFilter.emit(name);
    }
    else
    {
      this.graphFilter.emit("all");
    }
  }
}

export class Animals {
	name: string;
}
