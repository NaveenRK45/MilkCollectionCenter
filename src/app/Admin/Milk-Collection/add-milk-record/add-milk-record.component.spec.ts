import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMilkRecordComponent } from './add-milk-record.component';

describe('AddMilkRecordComponent', () => {
  let component: AddMilkRecordComponent;
  let fixture: ComponentFixture<AddMilkRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMilkRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMilkRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
