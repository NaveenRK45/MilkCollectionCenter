import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditSchemesComponent } from './admin-edit-schemes.component';

describe('AdminEditSchemesComponent', () => {
  let component: AdminEditSchemesComponent;
  let fixture: ComponentFixture<AdminEditSchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditSchemesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
