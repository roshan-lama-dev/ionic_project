import { Component, OnInit } from '@angular/core';
import { CarServices, Cars } from '../car.service';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {
  carDeleteReg: string = '';

  data: Cars[];
  message: string = '';

  constructor(private cars: CarServices) {
    this.data = cars.getCars();
  }

  ngOnInit() {}

  dodelete() {
    console.log(this.data);
    console.log(this.carDeleteReg);

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].sregistrationNum == this.carDeleteReg) {
        if (window.confirm('Do you want to remove the car from the Database')) {
          this.data.splice(i, 1);
          this.message = 'The car is removed from the database';
          console.log('success');
          this.carDeleteReg = '';
        }
      }
    }
  }
  doupdate() {
    console.log('Clicked');
  }
  doedit() {
    console.log('Clicked');
  }
}
