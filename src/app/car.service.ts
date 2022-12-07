import { Injectable } from '@angular/core';

export interface Cars {
  sregistrationNum: string;
  scarMake: string;
  scarModel: string;
  scarYear: string;
  scarOdometer: string;
  scarTransmission: string;
  scarBodyType: string;
  scarRentalPrice: string;
  scarRent: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarServices {
  // creating an empty array
  carData: Cars[] = [];
  filterCar: Cars[] = [];

  //   creating a function that adds the car to the array
  addCars(c: Cars) {
    this.carData[this.carData.length] = c;
  }

  //   creating a function that gets the car list
  getCars(): Cars[] {
    return this.carData;
  }
  // this function filtes the car array and only return the car not rented
  filteredCars(): Cars[] {
    return this.carData.filter((item) => {
      return item.scarRent == 'No';
    });
  }

  deleteCars(sregistrationNum: string): Cars[] {
    this.carData.filter((item, index) => {
      !(item.sregistrationNum == sregistrationNum);
    });
    return this.carData;
  }

  isPresent(sregistrationNum: string): boolean {
    this.carData.filter((item, index) => {
      if (item.sregistrationNum == sregistrationNum) {
        return true;
      } else return false;
    });
    return false;
  }

  isPresentFor(sreg: string): boolean {
    for (let i = 0; i < this.carData.length; i++) {
      if (this.carData[i].sregistrationNum == sreg) {
        return true;
      }
    }
    return false;
  }
}
