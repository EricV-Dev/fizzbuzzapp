import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlcreateuserComponent } from './sqlcreateuser.component';

describe('SqlcreateuserComponent', () => {
  let component: SqlcreateuserComponent;
  let fixture: ComponentFixture<SqlcreateuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlcreateuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlcreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
