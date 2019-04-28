import { Component } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
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
