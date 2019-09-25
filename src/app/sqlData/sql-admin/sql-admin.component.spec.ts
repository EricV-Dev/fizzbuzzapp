import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlAdminComponent } from './sql-admin.component';

describe('SqlAdminComponent', () => {
  let component: SqlAdminComponent;
  let fixture: ComponentFixture<SqlAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
