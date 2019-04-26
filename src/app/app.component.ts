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
    this.selectedLanguage = localStorage.getItem(this.localeKey);
  }

  onLanguageChange(change: MatSelectChange) {
    localStorage.setItem(this.localeKey, change.value);
    window.location.reload();
  }
}
