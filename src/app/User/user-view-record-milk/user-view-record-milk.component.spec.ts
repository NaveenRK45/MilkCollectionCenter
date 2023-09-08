import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewRecordMilkComponent } from './user-view-record-milk.component';

describe('UserViewRecordMilkComponent', () => {
  let component: UserViewRecordMilkComponent;
  let fixture: ComponentFixture<UserViewRecordMilkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewRecordMilkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewRecordMilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
