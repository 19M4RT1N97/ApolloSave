import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApolloService } from '../shared/Apollo.service';
import { Movie } from '../shared/Movie';
import { Schedule } from '../shared/Schedule';

@Component({
  selector: 'a.app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  movie: Movie;
  url="";

  constructor(private apolloService: ApolloService, private route: ActivatedRoute) { }

  @Output() showDetailsEvent = new EventEmitter<Movie>();
  showDetails(movie: Movie) {
    this.showDetailsEvent.emit(movie);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.apolloService.getMovieById(params['id']).subscribe(res => {
      this.movie=res;
      this.movie.actors=this.movie.actors.split("~").join(", ")
      this.url=`${environment.server}/MoviePicture/${this.movie.movieId}`;  
    }));
  }
}