import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApolloService } from '../shared/Apollo.service';
import { Schedule } from '../shared/Schedule';

@Component({
  selector: 'a.edit-schedule-item',
  templateUrl: './edit-schedule-item.component.html',
  styleUrls: ['./edit-schedule-item.component.css']
})
export class EditScheduleItemComponent implements OnInit {
  isUpdatingSchedule = false;
  @ViewChild('myForm', {static: true}) myForm: NgForm;
  schedule = new Schedule();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private as: ApolloService) 
    {}

  async ngOnInit(){
    const id = this.route.snapshot.params['id'];
    if (id>0) {
      this.isUpdatingSchedule = true;
      this.as.getScheduleById(id).subscribe(s => {
        this.schedule=s;
        this.schedule.startsAt=new Date(this.schedule.startsAt).toISOString().split("T")[0];
      });
    }else{
      this.schedule.scheduleId=0;
    }
  }

  submitForm() {
    let s:string; 
    this.myForm.value['StartsAt']= JSON.parse(JSON.stringify(new Date(this.myForm.value['StartsAt'])));
    if(this.myForm.value['StartsAt']!=null){
      this.myForm.value['ScheduleId']= Number(this.myForm.value['ScheduleId']);
      s=JSON.stringify(this.myForm.value);
      if (this.isUpdatingSchedule) {
        this.as.updateSchedule(s).subscribe(_ =>this.backClicked());
      } else {
        console.log(s)
        this.as.createSchedule(s).subscribe(_ =>this.backClicked());
      }
    }
  }

  backClicked(){
    this.router.navigateByUrl("admin/editSchedules")
  }

  deleteClicked(){
    this.as.deleteSchedule(this.myForm.value['ScheduleId']).subscribe(_ => this.backClicked());
  }
}
