import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovieItemComponent } from './edit-movie-item.component';

describe('EditMovieItemComponent', () => {
  let component: EditMovieItemComponent;
  let fixture: ComponentFixture<EditMovieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMovieItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
