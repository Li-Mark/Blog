import { Injectable } from "@angular/core";
@Injectable({ providedIn: "root" })
export class GoogleAnalyticsService {
  public performanceNavigationTime = window.performance.timing.navigationStart;

  constructor() {
    window["dataLayer"] = window["dataLayer"] || [];

    this.gtag("js", new Date());

    this.gtag("config", "UA-128972175-2");
  }

  public event(
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null
  ) {
    this.gtag("event", eventAction, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue
    });
  }

  private gtag(...params) {
    window["dataLayer"].push(arguments);
  }
}
