import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCinemahallLayoutComponent } from './edit-cinemahall-layout.component';

describe('EditCinemahallLayoutComponent', () => {
  let component: EditCinemahallLayoutComponent;
  let fixture: ComponentFixture<EditCinemahallLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCinemahallLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCinemahallLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
