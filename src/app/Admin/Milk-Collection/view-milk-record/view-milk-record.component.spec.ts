import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMilkRecordComponent } from './view-milk-record.component';

describe('ViewMilkRecordComponent', () => {
  let component: ViewMilkRecordComponent;
  let fixture: ComponentFixture<ViewMilkRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMilkRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMilkRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
