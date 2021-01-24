import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleItemComponent } from './schedule-item/schedule-item.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AdminComponent } from './admin/admin.component';
import { EditScheduleListComponent } from './edit-schedule-list/edit-schedule-list.component';
import { EditScheduleItemComponent } from './edit-schedule-item/edit-schedule-item.component';
import { EditMovieListComponent } from './edit-movie-list/edit-movie-list.component';
import { EditMovieItemComponent } from './edit-movie-item/edit-movie-item.component';
import { EditMovieListItemComponent } from './edit-movie-list-item/edit-movie-list-item.component';
import { EditCategoryListComponent } from './edit-category-list/edit-category-list.component';
import { EditCategoryListItemComponent } from './edit-category-list-item/edit-category-list-item.component';
import { EditCategoryItemComponent } from './edit-category-item/edit-category-item.component';
import { CinemahallListComponent } from './cinemahall-list/cinemahall-list.component';
import { CinemahallListItemComponent } from './cinemahall-list-item/cinemahall-list-item.component';
import { EditCinemahallItemComponent } from './edit-cinemahall-item/edit-cinemahall-item.component';
import { EditCinemahallLayoutComponent } from './edit-cinemahall-layout/edit-cinemahall-layout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    ScheduleListComponent,
    ScheduleItemComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    EditScheduleListComponent,
    EditScheduleItemComponent,
    EditMovieListComponent,
    EditMovieItemComponent,
    EditMovieListItemComponent,
    EditCategoryListComponent,
    EditCategoryListItemComponent,
    EditCategoryItemComponent,
    CinemahallListComponent,
    CinemahallListItemComponent,
    EditCinemahallItemComponent,
    EditCinemahallLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OAuthModule.forRoot(),
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule,
    MatProgressBarModule,
    MatDatepickerModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
