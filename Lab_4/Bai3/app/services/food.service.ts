import { Injectable } from '@angular/core';

import food from '../db.json'

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getFoods() {
    return food;
  }
}
