import { Component, Input } from '@angular/core';
import { Apartment } from '../model/apartment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-apartments',
  templateUrl: './single-apartments.component.html',
  styleUrls: ['./single-apartments.component.css'],
})
export class SingleApartmentsComponent {
  @Input() list: Apartment[] = [];
  surfaceFilter: number | null = null;
  filteredList: Apartment[] = [];
  ngOnInit() {
    this.filteredList = [...this.list];
    const storedFavorites = localStorage.getItem('favoriteApartments');
    if (storedFavorites) {
      this.favoriteApartments = JSON.parse(storedFavorites);
    }
  }

  filterApartmentsBySurface() {
    if (this.surfaceFilter !== null && this.surfaceFilter !== undefined) {
      this.filteredList = this.list.filter(
        (apartment) => apartment.surface >= this.surfaceFilter!
      );
    } else {
      this.filteredList = [...this.list];
    }
  }

  favoriteApartments: Apartment[] = [];

  isApartmentLiked(apartment: Apartment): boolean {
    return this.favoriteApartments.some((fav) => fav.id === apartment.id);
  }

  addToFavorites(apartment: Apartment) {
    const index = this.favoriteApartments.findIndex(
      (fav) => fav.id === apartment.id
    );
    if (index !== -1) {
      this.favoriteApartments.splice(index, 1);
    } else {
      this.favoriteApartments.push(apartment);
    }
    localStorage.setItem(
      'favoriteApartments',
      JSON.stringify(this.favoriteApartments)
    );
  }
}
