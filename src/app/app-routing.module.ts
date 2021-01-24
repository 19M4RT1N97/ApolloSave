import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CinemahallListComponent } from './cinemahall-list/cinemahall-list.component';
import { EditCategoryItemComponent } from './edit-category-item/edit-category-item.component';
import { EditCategoryListComponent } from './edit-category-list/edit-category-list.component';
import { EditCinemahallItemComponent } from './edit-cinemahall-item/edit-cinemahall-item.component';
import { EditCinemahallLayoutComponent } from './edit-cinemahall-layout/edit-cinemahall-layout.component';
import { EditMovieItemComponent } from './edit-movie-item/edit-movie-item.component';
import { EditMovieListComponent } from './edit-movie-list/edit-movie-list.component';
import { EditScheduleItemComponent } from './edit-schedule-item/edit-schedule-item.component';
import { EditScheduleListComponent } from './edit-schedule-list/edit-schedule-list.component';
import { LoginComponent } from './login/login.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { AdminGuard } from './shared/AdminGuard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'index.html',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ScheduleListComponent
  },
  {
    path: 'schedules',
    component: ScheduleListComponent
  },
  {
    path: 'movie/:id',
    component: MovieItemComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'admin',
    canActivate: [AdminGuard],
    component: AdminComponent
  },
  {
    path:'admin/editSchedules',
    canActivate: [AdminGuard],
    component: EditScheduleListComponent
  },
  {
    path:'admin/editSchedule/:id',
    canActivate: [AdminGuard],
    component: EditScheduleItemComponent
  },
  {
    path:'admin/editMovies',
    canActivate: [AdminGuard],
    component: EditMovieListComponent
  },
  {
    path:'admin/editMovie/:id',
    canActivate: [AdminGuard],
    component: EditMovieItemComponent
  },
  {
    path:'admin/editCinemaHalls',
    canActivate: [AdminGuard],
    component: CinemahallListComponent
  },
  {
    path:'admin/editCinemaHall/:id',
    canActivate: [AdminGuard],
    component: EditCinemahallItemComponent
  },
  {
    path:'admin/editCinemaHall/Layout/:id',
    canActivate: [AdminGuard],
    component: EditCinemahallLayoutComponent
  },
  {
    path:'admin/editCategories',
    canActivate: [AdminGuard],
    component: EditCategoryListComponent
  },
  {
    path:'admin/editCategory/:id',
    canActivate: [AdminGuard],
    component: EditCategoryItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
