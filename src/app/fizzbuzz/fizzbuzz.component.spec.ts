import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RunappComponent } from "./fizzbuzz.component";

describe("RunappComponent", () => {
  let component: RunappComponent;
  let fixture: ComponentFixture<RunappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RunappComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
