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
    // getting all of the car data
    this.data = c.getCars();

    // conditional checking to check whether the returned array is empty or not
    if (this.data.length == 0) {
      this.message = 'Please enter car information using the add cars tab';
    } else {
      this.message = '';
    }
    this.message = '';
  }

  // Displaying the help message
  displayHelp() {
    this.message =
      'You can view the list of the car data from the database in this page';
  }
}
