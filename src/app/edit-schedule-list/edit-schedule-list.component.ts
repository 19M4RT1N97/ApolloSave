import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { ApolloService } from '../shared/Apollo.service';
import { Schedule } from '../shared/Schedule';

@Component({
  selector: 'app-edit-schedule-list',
  templateUrl: './edit-schedule-list.component.html',
  styleUrls: ['./edit-schedule-list.component.css']
})
export class EditScheduleListComponent implements OnInit {
  
  schedules: Schedule[];
  isLoading: boolean;
  constructor(private apolloService: ApolloService, private router: Router, private route: ActivatedRoute) { }

  @Output() showDetailsEvent = new EventEmitter<Schedule>();
  showDetails(schedule: Schedule) {
    this.showDetailsEvent.emit(schedule);
  }

  ngOnInit(): void {
    this.apolloService.getSchedules().subscribe(res => this.schedules=res);
  }
}
