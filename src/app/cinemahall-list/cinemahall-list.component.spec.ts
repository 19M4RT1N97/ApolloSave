import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemahallListComponent } from './cinemahall-list.component';

describe('CinemahallListComponent', () => {
  let component: CinemahallListComponent;
  let fixture: ComponentFixture<CinemahallListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemahallListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemahallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
