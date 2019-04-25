import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SkillComponent } from "./skill.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
@NgModule({
  declarations: [SkillComponent],
  exports: [SkillComponent],
  imports: [CommonModule, MatProgressBarModule]
})
export class SkillModule {}
