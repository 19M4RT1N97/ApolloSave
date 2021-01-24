import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScheduleItemComponent } from './edit-schedule-item.component';

describe('EditScheduleItemComponent', () => {
  let component: EditScheduleItemComponent;
  let fixture: ComponentFixture<EditScheduleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditScheduleItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditScheduleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
