import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApolloService } from '../shared/Apollo.service';
import { Category } from '../shared/Category';
import { CinemaHall } from '../shared/CinemaHall';

@Component({
  selector: 'app-edit-cinemahall-item',
  templateUrl: './edit-cinemahall-item.component.html',
  styleUrls: ['./edit-cinemahall-item.component.css']
})
export class EditCinemahallItemComponent implements OnInit {
  isUpdatingCinemaHall = false;
  @ViewChild('myForm', {static: true}) myForm: NgForm;
  cinemaHall = new CinemaHall();
  categories: Category[];

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private as: ApolloService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.as.getAllCategories().subscribe(res=> this.categories=res);
    if (id>0) {
      this.isUpdatingCinemaHall = true;
      this.as.getCinemaHallById(id).subscribe(c => this.cinemaHall=c);
    }else{
      this.cinemaHall.cinemaHallId=0;
    }
  }
  submitForm() {
    let c:string;
    c=JSON.stringify(this.myForm.value)
    console.log(c)
    if (this.isUpdatingCinemaHall) {
      this.as.updateCinemaHall(c).subscribe(_ => this.backClicked());
    } else {
      this.as.createCinemaHall(c).subscribe(_ => this.backClicked());
    }
  }

  backClicked(){
    this.router.navigateByUrl("admin/editCinemaHalls");
  }

  deleteClicked(){
    this.as.deleteCinemaHall(this.myForm.value['CinemaHallId']).subscribe(_ => this.backClicked());
  }
}
