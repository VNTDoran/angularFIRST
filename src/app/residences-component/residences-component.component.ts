import { Component } from '@angular/core';
import { Residence } from '../model/residence';
import { Apartment } from '../model/apartment';

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css'],
})
export class ResidencesComponentComponent {
  listResidences: Residence[] = [
    {
      id: 41,
      name: 'Residence A',
      address: 'Address A',
      image: '../../assets/images/R4.jpg',
    },
    {
      id: 42,
      name: 'Residence B',
      address: 'Address B',
      image: '../../assets/images/R2.jpg',
    },
    {
      id: 43,
      name: 'Residence C',
      address: 'Address C',
      image: '../../assets/images/R3.jpg',
    },
    {
      id: 44,
      name: 'Residence D',
      address: 'Address D',
      image: '../../assets/images/R1.jpg',
    },
    {
      id: 45,
      name: 'Residence E',
      address: 'Address E',
      image: '../../assets/images/R5.jpg',
    },
    {
      id: 46,
      name: 'Residence F',
      address: 'Address F',
      image: '../../assets/images/R6.jpg',
    },
  ];

  listApartments: Apartment[] = [
    {
      id: 1,
      appartNum: 1,
      floorNum: 0,
      surface: 100,
      terrace: 'oui',
      surfaceTerrace: 20,
      category: 'S+1',
      description: 'Appartement S+1',
      residence: this.listResidences[0],
    },
    {
      id: 2,
      appartNum: 2,
      floorNum: 0,
      surface: 130,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'Appartement S+2',
      residence: this.listResidences[0],
    },
    {
      id: 3,
      appartNum: 3,
      floorNum: 1,
      surface: 80,
      terrace: 'oui',
      surfaceTerrace: 10,
      category: 'S+1',
      description: 'Appartement S+1',
      residence: this.listResidences[0],
    },
    {
      id: 4,
      appartNum: 1,
      floorNum: 0,
      surface: 90,
      terrace: 'oui',
      surfaceTerrace: 15,
      category: 'S+1',
      description: 'Appartement S+1',
      residence: this.listResidences[1],
    },
    {
      id: 5,
      appartNum: 2,
      floorNum: 1,
      surface: 120,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'Appartement S+2',
      residence: this.listResidences[1],
    },
    {
      id: 6,
      appartNum: 3,
      floorNum: 0,
      surface: 110,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'Appartement S+2',
      residence: this.listResidences[1],
    },
    {
      id: 7,
      appartNum: 1,
      floorNum: 0,
      surface: 120,
      terrace: 'oui',
      surfaceTerrace: 25,
      category: 'S+3',
      description: 'Appartement S+3',
      residence: this.listResidences[2],
    },
    {
      id: 8,
      appartNum: 2,
      floorNum: 1,
      surface: 100,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'Appartement S+2',
      residence: this.listResidences[2],
    },
    {
      id: 9,
      appartNum: 3,
      floorNum: 2,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+4',
      description: 'Appartement S+4',
      residence: this.listResidences[2],
    },
    {
      id: 10,
      appartNum: 1,
      floorNum: 0,
      surface: 110,
      terrace: 'oui',
      surfaceTerrace: 20,
      category: 'S+3',
      description: 'Appartement S+3',
      residence: this.listResidences[3],
    },
    {
      id: 11,
      appartNum: 2,
      floorNum: 1,
      surface: 130,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'Appartement S+2',
      residence: this.listResidences[3],
    },
    {
      id: 12,
      appartNum: 3,
      floorNum: 2,
      surface: 140,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+3',
      description: 'Appartement S+3',
      residence: this.listResidences[3],
    },
    {
      id: 13,
      appartNum: 1,
      floorNum: 0,
      surface: 100,
      terrace: 'oui',
      surfaceTerrace: 15,
      category: 'S+1',
      description: 'Appartement S+1',
      residence: this.listResidences[4],
    },
    {
      id: 14,
      appartNum: 2,
      floorNum: 1,
      surface: 120,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'Appartement S+2',
      residence: this.listResidences[4],
    },
    {
      id: 15,
      appartNum: 1,
      floorNum: 0,
      surface: 80,
      terrace: 'oui',
      surfaceTerrace: 10,
      category: 'S+1',
      description: 'Appartement S+1',
      residence: this.listResidences[5],
    },
    {
      id: 16,
      appartNum: 2,
      floorNum: 1,
      surface: 130,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'Appartement S+2',
      residence: this.listResidences[5],
    },
    {
      id: 17,
      appartNum: 3,
      floorNum: 2,
      surface: 160,
      terrace: 'oui',
      surfaceTerrace: 25,
      category: 'S+4',
      description: 'Appartement S+4',
      residence: this.listResidences[5],
    },
    {
      id: 15,
      appartNum: 3,
      floorNum: 2,
      surface: 180,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+4',
      description: 'Appartement S+4',
      residence: this.listResidences[4],
    },
    {
      id: 18,
      appartNum: 4,
      floorNum: 3,
      surface: 120,
      terrace: 'oui',
      surfaceTerrace: 20,
      category: 'S+2',
      description: 'Appartement S+2',
      residence: this.listResidences[4],
    },
    {
      id: 19,
      appartNum: 5,
      floorNum: 1,
      surface: 140,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+3',
      description: 'Appartement S+3',
      residence: this.listResidences[4],
    },
    {
      id: 20,
      appartNum: 4,
      floorNum: 2,
      surface: 90,
      terrace: 'oui',
      surfaceTerrace: 15,
      category: 'S+1',
      description: 'Appartement S+1',
      residence: this.listResidences[5],
    },
    {
      id: 21,
      appartNum: 5,
      floorNum: 3,
      surface: 110,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'Appartement S+2',
      residence: this.listResidences[5],
    },
  ];

  listApartmentsSpec: Apartment[][] = [];
  showArr: boolean[] = [];

  AfficherApartments(i: number) {
    if (!this.listApartmentsSpec[i]) {
      this.listApartmentsSpec[i] = [];
    }

    this.listApartmentsSpec[i].splice(0, this.listApartmentsSpec.length);

    this.listApartments.forEach((apartment) => {
      if (apartment.residence.id === i) {
        console.log('ye');
        this.listApartmentsSpec[i].push(apartment);
      }
    });

    if (this.showArr.length <= i) {
      this.showArr[i] = false;
    }

    this.showArr[i] = !this.showArr[i];
  }
}
