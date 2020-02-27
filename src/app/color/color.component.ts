import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.scss"]
})
export class ColorComponent implements OnInit {
  colors1 = [
    {name: "primary"},
    {name: "secondary"},
    {name: "info"},
    {name: "success"},
    {name: "warning"},
    {name: "error"},
    {name: "light"},
    {name: "dark"},
    {name: "white"}
  ]
  colors2 = [
    // { colorName:'white', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName: "silver", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "gray", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    // { colorName:'black', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName: "red", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "maroon", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "yellow", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "olive", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "lime", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "green", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "aqua", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "teal", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "blue", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "navy", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "fuchsia", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "purple", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
  ];

  constructor() {}

  ngOnInit() {}
}
