import { Component, OnInit } from '@angular/core';
import { CarServices, Cars } from '../car.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  filterCars: Cars[] = [];
  carData: Cars[];
  message: string = '';
  constructor(private carray: CarServices) {
    this.carData = carray.getCars();
    console.log(carray.filteredCars());
  }

  ngOnInit() {}

  displayHelp() {
    this.message = 'You can list the car that are currently available';
  }
  // function to display the cars that are not rented
  displayNotCars() {
    // for loop loops through the entire car data
    for (let i = 0; i < this.carData.length; i++) {
      // filter function filters the car array and return where the rented status of the car is no to the filtercars array
      this.filterCars = this.carData.filter((item) => {
        return item.scarRent == 'No';
      });
      console.log(this.filterCars);

      // this if con
      // if (this.carData[i].scarRent == 'No') {
      //   this.filterCars = this.carData;
      // } else {
      //   return;
      // }
    }
  }
}
