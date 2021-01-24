import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScheduleListComponent } from './edit-schedule-list.component';

describe('EditScheduleListComponent', () => {
  let component: EditScheduleListComponent;
  let fixture: ComponentFixture<EditScheduleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditScheduleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
