import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SkillComponent } from "./skill/skill.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "skill", component: SkillComponent },
      { path: "", redirectTo: "/skill", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
