import { Component, Input, OnInit } from '@angular/core';
import { CinemaHall } from '../shared/CinemaHall';

@Component({
  selector: 'a.cinemahall-list-item',
  templateUrl: './cinemahall-list-item.component.html',
  styleUrls: ['./cinemahall-list-item.component.css']
})
export class CinemahallListItemComponent implements OnInit {
  @Input() cinemaHall: CinemaHall
  constructor() { }

  ngOnInit(): void {
  }

}
