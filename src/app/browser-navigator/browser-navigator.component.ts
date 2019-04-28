import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-browser-navigator",
  templateUrl: "./browser-navigator.component.html",
  styleUrls: ["./browser-navigator.component.scss"]
})
export class BrowserNavigatorComponent {
  constructor() {}
}
