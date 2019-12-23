import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserExpressComponent } from './create-user-express.component';

describe('CreateUserExpressComponent', () => {
  let component: CreateUserExpressComponent;
  let fixture: ComponentFixture<CreateUserExpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserExpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
