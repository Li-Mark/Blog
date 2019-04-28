import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MobileNavigatorComponent } from "./mobile-navigator.component";

describe("MobileNavigatorComponent", () => {
  let component: MobileNavigatorComponent;
  let fixture: ComponentFixture<MobileNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MobileNavigatorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
