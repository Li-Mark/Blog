import { Component, ChangeDetectionStrategy } from "@angular/core";
import { GoogleAnalyticsService } from "../google.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-browser-navigator",
  templateUrl: "./browser-navigator.component.html",
  styleUrls: ["./browser-navigator.component.scss"]
})
export class BrowserNavigatorComponent {
  constructor(private google: GoogleAnalyticsService) {
    this.google.event(
      "performance",
      "initial page",
      "browser",
      performance.now()
    );
  }
}
