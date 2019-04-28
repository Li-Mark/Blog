import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-browser-navigator",
  templateUrl: "./browser-navigator.component.html",
  styleUrls: ["./browser-navigator.component.scss"]
})
export class BrowserNavigatorComponent {
  public selectedLanguage = "english";
  private localeKey = "yunlong-blog-locale";
  constructor() {
    const language = localStorage.getItem(this.localeKey);
    this.selectedLanguage = language ? language : this.selectedLanguage;
  }

  onLanguageChange(change: MatSelectChange) {
    this.selectedLanguage = change.value;
    localStorage.setItem(this.localeKey, this.selectedLanguage);
    window.location.reload();
  }
}
