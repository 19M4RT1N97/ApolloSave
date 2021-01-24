import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ɵangular_packages_router_router_b } from '@angular/router';
import { ApolloService } from '../shared/Apollo.service';
import { Movie } from '../shared/Movie';
import { Genre } from '../shared/Genre';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { environment } from 'src/environments/environment';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'a.edit-movie-item',
  templateUrl: './edit-movie-item.component.html',
  styleUrls: ['./edit-movie-item.component.css']
})
export class EditMovieItemComponent implements OnInit {
  isUpdatingMovie = false;
  @ViewChild('myForm', {static: true}) myForm: NgForm;
  genreSelect: Genre[];
  movie = new Movie();
  url="";

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private as: ApolloService) 
    {}

  async ngOnInit(){
    const id = this.route.snapshot.params['id'];
    if (id>0) {
      this.isUpdatingMovie = true;
      this.as.getMovieById(id).subscribe(s => {
        this.movie=s;
        this.movie.actors=this.movie.actors.split("~").join(", ")
        this.url=`${environment.server}/MoviePicture/${this.movie.movieId}`;
      });
    }else{
      this.movie.movieId=0;
      this.movie.genreId=1;
    }
    this.as.getAllGenres().subscribe(res => this.genreSelect=res)
  }

  onFileLoad(event){
    if(event.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any) => {
        this.url = event.target.result;
      };
    }
  }

  submitForm() {
    let m:string;
    this.myForm.value['GenreId'] = Number(this.myForm.value['GenreId'])
    if(!this.url.startsWith("http")) {
      m=JSON.stringify(this.myForm.value);
      m = m.split("}")[0]+", \"MoviePicture\": \""+this.url.split(",")[1]+"\"}"
    }
    else{
      m=JSON.stringify(this.myForm.value);
      m = m.split("}")[0]+", \"MoviePicture\": \""+this.url+"\"}"
    }
    if (this.isUpdatingMovie) {
      this.as.updateMovie(m).subscribe(_ =>this.backClicked());
    } else {
      this.as.createMovie(m).subscribe(_ =>this.backClicked());
    }
  }

  backClicked(){
    this.router.navigateByUrl("admin/editMovies");
  }

  deleteClicked(){
    this.as.deleteMovie(this.myForm.value['MovieId']).subscribe(_ => this.backClicked());
  }
}
