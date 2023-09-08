import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMilkRecordComponent } from './delete-milk-record.component';

describe('DeleteMilkRecordComponent', () => {
  let component: DeleteMilkRecordComponent;
  let fixture: ComponentFixture<DeleteMilkRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMilkRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMilkRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
