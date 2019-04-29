import { Component, ChangeDetectionStrategy } from "@angular/core";
import { GoogleAnalyticsService } from "../google.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-mobile-navigator",
  templateUrl: "./mobile-navigator.component.html",
  styleUrls: ["./mobile-navigator.component.scss"]
})
export class MobileNavigatorComponent {
  constructor(private google: GoogleAnalyticsService) {
    this.google.event(
      "performance",
      "initial page",
      "mobile",
      performance.now()
    );
  }
}
