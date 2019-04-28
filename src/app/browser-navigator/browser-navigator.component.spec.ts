import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BrowserNavigatorComponent } from "./browser-navigator.component";

describe("BrowserNavigatorComponent", () => {
  let component: BrowserNavigatorComponent;
  let fixture: ComponentFixture<BrowserNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrowserNavigatorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
