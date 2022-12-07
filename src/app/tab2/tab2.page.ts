import { Component } from '@angular/core';
import { Cars, CarServices } from '../car.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  data: Cars[];
  message: string = '';
  constructor(private c: CarServices) {
    this.data = c.getCars();

    if (this.data.length == 0) {
      this.message = 'Please enter car information using the add cars tab';
    } else {
      this.message = '';
    }
  }
}
