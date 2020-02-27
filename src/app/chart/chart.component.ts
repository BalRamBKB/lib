import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  DataS = [
    { year: 2012, quantity: 100},
    { year: 2013, quantity: 300 },
    { year: 2014, quantity: 450 },
    { year: 2015, quantity: 680},
    { year: 2016, quantity: 830 },
    { year: 2017, quantity: 950 }
  ];
  DataT = [
    { total: 0, },
    { total: 200,  },
    { total: 500,  },
    { total: 700, },
    { total: 900,  },
    { total: 1100,  }
  ];
  reversedList: Array<any> = [];
  constructor() {}

  ngOnInit() {
    this.reversedList = this.DataT.slice().reverse();
  }
}
