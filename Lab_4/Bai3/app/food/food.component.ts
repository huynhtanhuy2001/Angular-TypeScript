import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent {
  public foodArr: any[] = [];
  public ClickFood: any = {};
  constructor(private food: FoodService) {
    this.foodArr = food.getFoods();
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  public printFood(index: number): any {
    for (let i = 0; i < this.foodArr.length; i++) {
      if (index == i) {
        this.ClickFood = this.foodArr[i];
      }
    }
    return this.ClickFood;
  }
}
