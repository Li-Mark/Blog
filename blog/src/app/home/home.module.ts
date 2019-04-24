import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { ProfileModule } from "./profile/profile.module";
import { HomeRoutingModule } from "./home-routing.module";
import { SkillModule } from "./skill/skill.module";

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ProfileModule, SkillModule]
})
export class HomeModule {}
