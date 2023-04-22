import { Component, Input } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  @Input()
  foodPageTags?: string[];
  tags?: Tag[] = [];
  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    if (!this.foodPageTags) this.tags = this.foodService.getAllTags();
  }
}
