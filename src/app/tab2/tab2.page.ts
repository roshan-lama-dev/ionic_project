import { Component } from '@angular/core';
import { Cars, CarServices } from '../car.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  data: Cars[];
  constructor(private cars: CarServices) {
    this.data = cars.getCars();
  }
}
