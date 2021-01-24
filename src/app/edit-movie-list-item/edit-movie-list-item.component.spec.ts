import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovieListItemComponent } from './edit-movie-list-item.component';

describe('EditMovieListItemComponent', () => {
  let component: EditMovieListItemComponent;
  let fixture: ComponentFixture<EditMovieListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMovieListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovieListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
