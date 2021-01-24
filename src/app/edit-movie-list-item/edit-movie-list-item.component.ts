import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../shared/Movie';

@Component({
  selector: 'a.edit-movie-list-item',
  templateUrl: './edit-movie-list-item.component.html',
  styleUrls: ['./edit-movie-list-item.component.css']
})
export class EditMovieListItemComponent implements OnInit {

  @Input() movie : Movie;
  url="";
  
  constructor() { }

  ngOnInit(): void {
    this.url=`${environment.server}/MoviePicture/${this.movie.movieId}`;
  }

}
