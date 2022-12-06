import { Component } from '@angular/core';
import { CarServices, Cars } from '../car.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  // creating sting array for the type
  cartypes: string[] = ['Automatic', 'Manual'];
  seasons: string[] = ['Automatic', 'Manual'];
  regNum: string = '';
  carMake: string = '';
  carModel: string = '';
  carYear: string = '';
  carOdometer: string = '';
  // carTransmission: string = '';
  // carBody: string = '';
  // carRental: string = '';
  // carRent: string = '';

  constructor(private cars: CarServices) {}
  // private cars: CarServices
  // let st : Student = {ID: tempID, name: this.newName};
  // this.students.doAdd(st);
  addToDatabase() {
    console.log('The button is clickwed');

    let tempArray: Cars = {
      sregistrationNum: this.regNum,
      scarMake: this.carMake,
      scarModel: this.carModel,
      scarYear: this.carYear,
      scarOdometer: this.carOdometer,
      // carTransmission: this.carTransmission,
      // carBodyType: this.carBody,
      // carRentalPrice: this.carRental,
      // carRent: this.carRent,
    };

    //adds the data into the array
    this.cars.addCars(tempArray);
    console.log(tempArray);
  }
}
