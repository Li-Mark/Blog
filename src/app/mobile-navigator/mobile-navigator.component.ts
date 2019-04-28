import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-mobile-navigator",
  templateUrl: "./mobile-navigator.component.html",
  styleUrls: ["./mobile-navigator.component.scss"]
})
export class MobileNavigatorComponent {
  constructor() {}
}
