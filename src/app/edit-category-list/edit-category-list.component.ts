import { Component, OnInit } from '@angular/core';
import { ApolloService } from '../shared/Apollo.service';
import { Category } from '../shared/Category';

@Component({
  selector: 'app-edit-category-list',
  templateUrl: './edit-category-list.component.html',
  styleUrls: ['./edit-category-list.component.css']
})
export class EditCategoryListComponent implements OnInit {

  categories: Category[];

  constructor(private as: ApolloService) { }

  ngOnInit(): void {
    this.as.getAllCategories().subscribe(res => this.categories=res);
  }

}
