import { Component, OnInit } from "@angular/core";

// component
@Component({
  selector: "app-property-card",
  templateUrl: "./property-card.component.html",
  styleUrls: ["./property-card.component.css"],
})
export class PropertyCardComponent {
  Property: any = {
    Id: 1,
    Name: "New House",
    Type: "House",
    Price: 100000,
  };
}
