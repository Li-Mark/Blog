import { BrowserModule, DomSanitizer } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatIconRegistry } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ProfileModule } from "./profile/profile.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserNavigatorModule } from "./browser-navigator/browser-navigator.module";
import { MobileNavigatorModule } from "./mobile-navigator/mobile-navigator.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserNavigatorModule,
    BrowserModule,
    HttpClientModule,
    MobileNavigatorModule,
    MatToolbarModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl(`../assets/icons.svg`)
    );
  }
}
