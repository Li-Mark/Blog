import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { MarkdownModule } from "ngx-markdown";

@NgModule({
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
  imports: [CommonModule, MarkdownModule.forChild()]
})
export class ProfileModule {}
