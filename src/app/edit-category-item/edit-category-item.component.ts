import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApolloService } from '../shared/Apollo.service';
import { Category } from '../shared/Category';

@Component({
  selector: 'app-edit-category-item',
  templateUrl: './edit-category-item.component.html',
  styleUrls: ['./edit-category-item.component.css']
})
export class EditCategoryItemComponent implements OnInit {
  isUpdatingCategory = false;
  @ViewChild('myForm', {static: true}) myForm: NgForm;
  category = new Category();

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private as: ApolloService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id>0) {
      this.isUpdatingCategory = true;
      this.as.getCategoryById(id).subscribe(c => this.category=c);
    }else{
      this.category.categoryId=0;
    }
  }
  submitForm() {
    let c:string;
    this.myForm.value['Price'] = Number(this.myForm.value['Price'])
    c=JSON.stringify(this.myForm.value)
    if (this.isUpdatingCategory) {
      this.as.updateCategory(c).subscribe(_ => this.backClicked());
    } else {
      this.as.createCategory(c).subscribe(_ => this.backClicked());
    }
  }

  backClicked(){
    this.router.navigateByUrl("admin/editCategories");
  }

  deleteClicked(){
    this.as.deleteCategory(this.myForm.value['CategoryId']).subscribe(_ => this.backClicked());
  }
}
