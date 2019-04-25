import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.scss"]
})
export class SkillComponent implements OnInit {
  skills = [
    { name: ".NET", value: 60, color: "primary" },
    { name: "Angular", value: 80, color: "warn" },
    { name: "AngularJS", value: 60, color: "primary" },
    { name: "TYPE SCRIPT", value: 80, color: "warn" },
    { name: "JAVA SCRIPT", value: 70, color: "accent" },
    { name: "HTML/CSS", value: 80, color: "warn" },
    { name: "Docker", value: 40, color: "primary" },
    { name: "Scrum", value: 70, color: "accent" }
  ];
  constructor() {}

  ngOnInit() {}
}
