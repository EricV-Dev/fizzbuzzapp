import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExpressuserdetailComponent } from "./express-user-detail.component";

describe("ExpressuserdetailComponent", () => {
  let component: ExpressuserdetailComponent;
  let fixture: ComponentFixture<ExpressuserdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpressuserdetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressuserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
