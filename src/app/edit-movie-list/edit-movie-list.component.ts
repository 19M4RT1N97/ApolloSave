import { Component, OnInit } from '@angular/core';
import { ApolloService } from '../shared/Apollo.service';
import { Movie } from '../shared/Movie';

@Component({
  selector: 'app-edit-movie-list',
  templateUrl: './edit-movie-list.component.html',
  styleUrls: ['./edit-movie-list.component.css']
})
export class EditMovieListComponent implements OnInit {

  movies: Movie[];

  constructor(private apolloService: ApolloService) { }

  ngOnInit(): void {
    this.apolloService.getAllMovies().subscribe(res => this.movies=res);
  }

}
