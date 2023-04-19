import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
foods:String[] = []


   constructor (private foodService:FoodService){}

   ngOnInit():void{
    this.foods = this.foodService.getAll()
   }
}
