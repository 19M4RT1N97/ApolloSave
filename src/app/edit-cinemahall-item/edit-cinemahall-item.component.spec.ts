import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCinemahallItemComponent } from './edit-cinemahall-item.component';

describe('EditCinemahallItemComponent', () => {
  let component: EditCinemahallItemComponent;
  let fixture: ComponentFixture<EditCinemahallItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCinemahallItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCinemahallItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
