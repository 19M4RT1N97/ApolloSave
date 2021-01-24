import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApolloService } from '../shared/Apollo.service';
import { Movie } from '../shared/Movie';
import { Schedule } from '../shared/Schedule';

@Component({
  selector: 'a.schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.css']
})
export class ScheduleItemComponent implements OnInit {

  @Input() schedule: Schedule;
  movie: Movie;
  url="";
  fillState=0;
  progressColor="accent"

  constructor(private apolloService: ApolloService) { }

  ngOnInit(): void {
    this.schedule.startsAt = this.schedule.startsAt.split("T")[0] + " " + this.schedule.startsAt.split("T")[1]
    this.apolloService.getMovieById(this.schedule.movieId).subscribe(res => {
      this.movie=res
      this.url=`${environment.server}/MoviePicture/${this.movie.movieId}`
    });
    this.apolloService.getReservedPercantage(this.schedule.scheduleId).subscribe(res => {
      this.fillState=res;
      if(this.fillState==100){
        this.progressColor="warn"
      }
    });
  }

}
