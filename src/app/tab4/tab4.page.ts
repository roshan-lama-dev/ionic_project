import { Component, OnInit } from '@angular/core';
import { Cars, CarServices } from '../car.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  unFiltereddata: Cars[];
  filteredData: Cars[] = [];
  searchReg: string = '';
  message: string = '';
  // searchReg: string = '';
  constructor(cars: CarServices) {
    this.unFiltereddata = cars.getCars();
  }

  displayHelp() {
    this.message =
      'You can search the car data by entering the car registration number';
  }
  searchCars() {
    this.filteredData = [];
    console.log('button clicked');
    for (let i = 0; i < this.unFiltereddata.length; i++) {
      if (this.unFiltereddata[i].sregistrationNum == this.searchReg) {
        this.message = '';

        this.filteredData.push(this.unFiltereddata[i]);
        this.searchReg = '';
      }
    }
  }

  ngOnInit() {
    this.filteredData = [];
  }
}
