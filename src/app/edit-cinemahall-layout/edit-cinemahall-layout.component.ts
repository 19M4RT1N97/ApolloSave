import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApolloService } from '../shared/Apollo.service';
import { Category } from '../shared/Category';
import { SeatRow } from '../shared/SeatRow';

@Component({
  selector: 'app-edit-cinemahall-layout',
  templateUrl: './edit-cinemahall-layout.component.html',
  styleUrls: ['./edit-cinemahall-layout.component.css']
})
export class EditCinemahallLayoutComponent implements OnInit {
  isEmpty=true;
  categories: Category[];
  seatRows: SeatRow[];
  currCatId: number;
  prevCatId: number;
  currSeatRowId: number;
  currentSeatAmount: number;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private as: ApolloService) { }

  ngOnInit(): void {
    this.as.getAllCategories().subscribe(res=> this.categories=res);
    if(this.route.snapshot.params['id']>0)
      this.as.getRowsByHallId(this.route.snapshot.params['id']).subscribe(res=> {
        this.seatRows=res;
        if(this.seatRows.length>0){
          this.isEmpty=false;
          this.currCatId=this.seatRows[0].categoryId;
          this.as.getSeatAmount(this.route.snapshot.params['id']).subscribe(res=> this.currentSeatAmount=res)
        }
        else
        {
          this.currCatId=this.categories[0].categoryId;
          this.currentSeatAmount=0;
        }
        this.prevCatId=this.currCatId;
      });
    else{
      console.log("hi");
      this.currCatId=this.categories[0].categoryId;
    }
    this.prevCatId=this.currCatId;
    this.currSeatRowId=0;
  }

  submitForm(){
    let sr = JSON.parse("{\"CinemaHallId\":"+this.route.snapshot.params['id']+", \"SeatRowId\":"+ this.currSeatRowId+", \"CategoryId\":"+this.currCatId+"}");
    if(this.route.snapshot.params['id']>0){
      if(!this.isEmpty && this.currSeatRowId != 0)
        this.as.deleteSeatRow(this.route.snapshot.params['id'], this.currSeatRowId).subscribe()
      this.as.createSeatRow(sr).subscribe(_ => this.backClicked())
    }
    else{

    }
  }

  rowChange(e){
    if(this.seatRows){
      for (let x of this.seatRows){
        if(x.seatRowNr==e.target.value)
          this.currCatId=x.categoryId;
          this.prevCatId=this.currCatId;
      }
    }else{
      this.currSeatRowId=0;
    }
  }

  deleteClicked(){
    this.as.deleteSeatRow(this.route.snapshot.params['id'], this.currSeatRowId).subscribe(_ =>
      this.router.navigateByUrl(`admin/editCinemaHall/${this.route.snapshot.params['id']}`))
  }

  backClicked(){
    this.router.navigateByUrl(`admin/editCinemaHall/${this.route.snapshot.params['id']}`);
  }

  addSeat(){
   let sr = JSON.parse("{\"CinemaHallId\":"+this.route.snapshot.params['id']+", \"SeatRowId\":"+ 0 +", \"CategoryId\":"+0+"}");
   this.as.createSeats(sr).subscribe(_ => this.currentSeatAmount++)
  }

  removeSeat(){
    if(this.currentSeatAmount>0){
      this.as.deleteSeats(this.route.snapshot.params['id']).subscribe(_ => this.currentSeatAmount--)
    }
  }
}
