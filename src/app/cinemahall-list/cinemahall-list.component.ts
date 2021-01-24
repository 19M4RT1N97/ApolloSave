import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApolloService } from '../shared/Apollo.service';
import { CinemaHall } from '../shared/CinemaHall';

@Component({
  selector: 'app-cinemahall-list',
  templateUrl: './cinemahall-list.component.html',
  styleUrls: ['./cinemahall-list.component.css']
})
export class CinemahallListComponent implements OnInit {
  cinemaHalls: CinemaHall[];
  isLoading: boolean;
  constructor(private apolloService: ApolloService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.apolloService.getCinemaHalls().subscribe(res => this.cinemaHalls=res);
  }

}
