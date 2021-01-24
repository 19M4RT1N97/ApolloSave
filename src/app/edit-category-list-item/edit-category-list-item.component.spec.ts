import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryListItemComponent } from './edit-category-list-item.component';

describe('EditCategoryListItemComponent', () => {
  let component: EditCategoryListItemComponent;
  let fixture: ComponentFixture<EditCategoryListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCategoryListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
