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
    // this.filterCars = carray.filteredCars();
    this.carData = carray.getCars();
    console.log(carray.filteredCars());

    // if (this.filterCars.length == 0) {
    //   this.message = 'Please enter car information using the add cars tab';
    // }
  }

  ngOnInit() {}

  displayHelp() {
    this.message = 'You can list the car that are currently available';
  }

  displayNotCars() {
    console.log(this.carData);
    for (let i = 0; i < this.carData.length; i++) {
      this.filterCars = this.carData.filter((item) => {
        return item.scarRent == 'No';
        console.log(item.scarRent);
      });
      console.log(this.filterCars);
      // console.log(this.carData.);
      if (this.carData[i].scarRent == 'No') {
        this.filterCars = this.carData;
      } else {
        return;
      }
    }
  }
}
