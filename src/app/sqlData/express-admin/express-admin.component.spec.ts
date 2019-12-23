import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressAdminComponent } from './express-admin.component';

describe('ExpressAdminComponent', () => {
  let component: ExpressAdminComponent;
  let fixture: ComponentFixture<ExpressAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
