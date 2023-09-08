import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMilkRecordComponent } from './edit-milk-record.component';

describe('EditMilkRecordComponent', () => {
  let component: EditMilkRecordComponent;
  let fixture: ComponentFixture<EditMilkRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMilkRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMilkRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
