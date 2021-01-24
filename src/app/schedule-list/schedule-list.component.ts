import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { ApolloService } from '../shared/Apollo.service';
import { Schedule } from '../shared/Schedule';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  schedules: Schedule[];
  keyup = new EventEmitter<string>();
  datechanged = new EventEmitter<string>();
  isLoading: boolean;
  constructor(private apolloService: ApolloService) { }

  ngOnInit(): void {
    this.apolloService.getSchedules().subscribe(res => this.schedules=res);

    this.keyup
    .pipe(debounceTime(500), distinctUntilChanged(), tap(() => this.isLoading = true),
			switchMap(searchTerm => this.apolloService.getAllSearchByTitle(searchTerm)), tap(() => this.isLoading = false))
    .subscribe(schedules => this.schedules = schedules);
    
    this.datechanged
    .pipe(debounceTime(500), distinctUntilChanged(), tap(() => this.isLoading = true),
    switchMap(searchDate => this.apolloService.getAllSearchByDate(searchDate)), tap(() => this.isLoading = false))
    .subscribe(schedules => this.schedules = schedules);
  }
}