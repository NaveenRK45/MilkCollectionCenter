import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditOffersComponent } from './admin-edit-offers.component';

describe('AdminEditOffersComponent', () => {
  let component: AdminEditOffersComponent;
  let fixture: ComponentFixture<AdminEditOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
