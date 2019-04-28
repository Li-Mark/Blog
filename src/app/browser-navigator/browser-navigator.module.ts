import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserNavigatorComponent } from "./browser-navigator.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [BrowserNavigatorComponent],
  exports: [BrowserNavigatorComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule]
})
export class BrowserNavigatorModule {}
