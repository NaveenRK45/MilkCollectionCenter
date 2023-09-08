import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteSchemesComponent } from './admin-delete-schemes.component';

describe('AdminDeleteSchemesComponent', () => {
  let component: AdminDeleteSchemesComponent;
  let fixture: ComponentFixture<AdminDeleteSchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteSchemesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeleteSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
