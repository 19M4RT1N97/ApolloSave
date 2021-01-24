import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryListComponent } from './edit-category-list.component';

describe('EditCategoryListComponent', () => {
  let component: EditCategoryListComponent;
  let fixture: ComponentFixture<EditCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
