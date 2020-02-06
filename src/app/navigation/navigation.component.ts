import { Component, OnInit, HostListener, ElementRef } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {

  constructor(private eRef: ElementRef) {}

  ngOnInit() {}

  openNav() {
    document.getElementById("mynav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mynav").style.width = "0";
  }

  // @HostListener("document:click", ["$event"])
  // clickout(event) {
  //   if (this.eRef.nativeElement.contains(event.target)) {
  //     // document.getElementById("mynav").style.width = "250px";
  //   } else {
  //     document.getElementById("mynav").style.width = "0";
  //   }
  // }
}
