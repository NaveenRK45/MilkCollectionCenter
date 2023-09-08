import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteOffersComponent } from './admin-delete-offers.component';

describe('AdminDeleteOffersComponent', () => {
  let component: AdminDeleteOffersComponent;
  let fixture: ComponentFixture<AdminDeleteOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeleteOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
