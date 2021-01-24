import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemahallListItemComponent } from './cinemahall-list-item.component';

describe('CinemahallListItemComponent', () => {
  let component: CinemahallListItemComponent;
  let fixture: ComponentFixture<CinemahallListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemahallListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemahallListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
