import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RunappComponent } from "./runapp.component";

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

  it("should return the item", () => {
    let component = new RunappComponent();
    component.outputFizzBuzz();

    let resultString =
      "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz";

    let output = resultString.split(", ");

    console.log(output);
    console.log(component.fizzResult);

    expect(component.fizzResult).toBe(output);
  });
});
