import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewOffersComponent } from './admin-view-offers.component';

describe('AdminViewOffersComponent', () => {
  let component: AdminViewOffersComponent;
  let fixture: ComponentFixture<AdminViewOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
