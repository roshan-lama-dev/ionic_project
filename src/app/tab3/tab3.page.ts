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
  carTransmission: string = '';
  carBody: string = '';
  carRental: string = '';
  carRent: string = '';
  message: string = '';

  constructor(private cars: CarServices) {}
  displayHelp() {
    this.message =
      'You can use this form to add the car data into the database';
  }
  addToDatabase() {
    // if (this.regNum == '') {
    //   this.message = 'Please enter the required registration number';
    //   return;

    if (this.cars.isPresentFor(this.regNum)) {
      this.message = 'Please enter different car information';
      return;
    }

    // }
    // if (this.carMake == '') {
    //   this.message = 'Please enter the required car make';
    //   return;
    // }
    // if (this.carModel == '') {
    //   this.message = 'Please enter the required car model';
    //   return;
    // }
    // if (this.carYear == '') {
    //   this.message = 'Please enter the required car year';
    //   return;
    // }
    // if (this.carOdometer == '') {
    //   this.message = 'Please enter the required car odometer';
    //   return;
    // }
    // if (this.carTransmission == '') {
    //   this.message = 'Please select the required car transmission';
    //   return;
    // }
    // if (this.carBody == '') {
    //   this.message = 'Please select the required car body';
    //   return;
    // }
    // if (this.carRental == '') {
    //   this.message = 'Please enter the required car rental price';
    //   return;
    // }
    // if (this.carRent == '') {
    //   this.message = 'Please enter the required car rental status';
    //   return;
    // }

    let tempArray: Cars = {
      sregistrationNum: this.regNum,
      scarMake: this.carMake,
      scarModel: this.carModel,
      scarYear: this.carYear,
      scarOdometer: this.carOdometer,
      scarTransmission: this.carTransmission,
      scarBodyType: this.carBody,
      scarRentalPrice: this.carRental,
      scarRent: this.carRent,
    };

    //adds the data into the array
    this.cars.addCars(tempArray);
    this.message = 'Successfully added the car details to the database';
    this.carBody = '';
    this.carMake = '';
    this.carModel = '';
    this.carOdometer = '';
    this.carRent = '';
    this.carRental = '';
    this.carYear = '';
    this.carTransmission = '';
    this.regNum = '';
    console.log(tempArray);
  }
}
