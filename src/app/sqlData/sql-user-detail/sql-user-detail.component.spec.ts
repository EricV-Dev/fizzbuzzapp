import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlUserDetailComponent } from './sql-user-detail.component';

describe('SqlUserDetailComponent', () => {
  let component: SqlUserDetailComponent;
  let fixture: ComponentFixture<SqlUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
