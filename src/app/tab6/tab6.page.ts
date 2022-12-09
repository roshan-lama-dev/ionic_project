import { Component, OnInit } from '@angular/core';
import { CarServices, Cars } from '../car.service';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {
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
  pos: number = 0;

  carDeleteReg: string = '';

  data: Cars[];

  constructor(private cars: CarServices) {
    this.data = cars.getCars();
    if (this.data.length == 0) {
      this.pos = -1;
      this.regNum = '';
      this.carMake = '';
      this.carModel = '';
      this.carYear = '';
      this.carOdometer = '';
      this.carTransmission = '';
      this.carBody = '';
      this.carRental = '';
      this.carRent = '';
    } else {
      this.pos = 0;
      this.updateDisplay();
    }
  }

  ngOnInit() {}
  displayHelp() {
    this.message = 'You can view, edit and delete the car data in this page';
  }
  // function to display the updated information
  updateDisplay() {
    this.regNum = this.data[this.pos].sregistrationNum;
    this.carMake = this.data[this.pos].scarMake;
    this.carModel = this.data[this.pos].scarModel;
    this.carYear = this.data[this.pos].scarYear;
    this.carOdometer = this.data[this.pos].scarOdometer;
    this.carTransmission = this.data[this.pos].scarTransmission;
    this.carBody = this.data[this.pos].scarBodyType;
    this.carRental = this.data[this.pos].scarRentalPrice;
    this.carRent = this.data[this.pos].scarRent;
  }
  // displays the next element from the array
  doNext() {
    if (this.pos == 0) {
      this.updateDisplay();
    }
    if (this.pos == this.data.length - 1) {
      this.message = 'Last record from the database';
    } else {
      this.pos++;
      this.updateDisplay();
    }
  }

  // removes the element from the array
  doDelete() {
    if (window.confirm('Do you want to remove the car from the Database')) {
      if (this.pos < 0) {
        // check for empty list
        this.message = 'No records found';
        return;
      }
      // splice remove the element from the array, by taking the index position of the element
      this.data.splice(this.pos, 1);
      if (this.data.length == this.pos) {
        this.pos--;
      }
      if (this.data.length == 0) {
        this.message = 'No car records found';
      } else {
        this.updateDisplay();
      }
    }
  }

  // displays the previous record from the array
  doPrevious() {
    if (this.pos == 0) {
      this.updateDisplay();
    }
    if (this.pos <= 0) {
      this.message = 'First Record';
    } else {
      this.pos--;
      this.updateDisplay();
    }
  }

  // function to save the edited car information
  doSave() {
    if (this.pos >= 0) {
      if (this.carMake == '') {
        this.message = 'Please enter the required car make';
        return;
      }
      if (this.carModel == '') {
        this.message = 'Please enter the required car model';
        return;
      }
      if (this.carYear == '') {
        this.message = 'Please enter the required car year';
        return;
      }
      if (this.carOdometer == '') {
        this.message = 'Please enter the required car odometer';
        return;
      }
      if (this.carTransmission == '') {
        this.message = 'Please select the required car transmission';
        return;
      }
      if (this.carBody == '') {
        this.message = 'Please select the required car body';
        return;
      }
      if (this.carRental == '') {
        this.message = 'Please enter the required car rental price';
        return;
      }
      if (this.carRent == '') {
        this.message = 'Please enter the required car rental status';
        return;
      }

      // updating the input field with the edited information

      this.data[this.pos].sregistrationNum = this.regNum;
      this.data[this.pos].scarMake = this.carMake;
      this.data[this.pos].scarBodyType = this.carBody;
      this.data[this.pos].scarModel = this.carModel;
      this.data[this.pos].scarOdometer = this.carOdometer;
      this.data[this.pos].scarRent = this.carRent;
      this.data[this.pos].scarRentalPrice = this.carRental;
      this.data[this.pos].scarTransmission = this.carTransmission;
      this.data[this.pos].scarYear = this.carYear;
    } else {
      this.message = 'Please select a car information first';
    }
  }
}
