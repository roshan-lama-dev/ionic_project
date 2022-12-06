import { Injectable } from '@angular/core';

export interface Cars {
  sregistrationNum: string;
  scarMake: string;
  scarModel: string;
  scarYear: string;
  scarOdometer: string;
  //   carTransmission: string;
  //   carBodyType: string;
  //   carRentalPrice: string;
  //   carRent: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarServices {
  // creating an empty array
  carData: Cars[] = [];

  //   creating a function that adds the car to the array
  addCars(c: Cars) {
    this.carData[this.carData.length] = c;
  }

  //   creating a function that gets the car list
  getCars(): Cars[] {
    return this.carData;
  }
}
