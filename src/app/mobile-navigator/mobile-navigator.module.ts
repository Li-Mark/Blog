import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MobileNavigatorComponent } from "./mobile-navigator.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [MobileNavigatorComponent],
  exports: [MobileNavigatorComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule]
})
export class MobileNavigatorModule {}
