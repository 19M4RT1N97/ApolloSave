import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../shared/Category';

@Component({
  selector: 'a.edit-category-list-item',
  templateUrl: './edit-category-list-item.component.html',
  styleUrls: ['./edit-category-list-item.component.css']
})
export class EditCategoryListItemComponent implements OnInit {

  @Input() category: Category
  constructor() { }

  ngOnInit(): void {
  }

}
