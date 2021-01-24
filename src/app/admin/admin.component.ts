import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  schedulesClicked(){this.router.navigateByUrl("admin/editSchedules")}
  moviesClicked(){this.router.navigateByUrl("admin/editMovies")}
  cinameHallsClicked(){this.router.navigateByUrl("admin/editCinemaHalls")}
  categoriesClicked(){this.router.navigateByUrl("admin/editCategories")}
}
