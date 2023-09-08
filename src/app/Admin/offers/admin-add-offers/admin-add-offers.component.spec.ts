import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddOffersComponent } from './admin-add-offers.component';

describe('AdminAddOffersComponent', () => {
  let component: AdminAddOffersComponent;
  let fixture: ComponentFixture<AdminAddOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
