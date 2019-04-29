import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { ProfileComponent } from "./profile.component";
import { SkillModule } from "./skill/skill.module";
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
  imports: [CommonModule, MatIconModule, SkillModule, MarkdownModule.forChild()]
})
export class ProfileModule {}
