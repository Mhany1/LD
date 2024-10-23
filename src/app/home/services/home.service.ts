import { Injectable } from '@angular/core';
import { HomeRepositoryService } from '../repository/home.repository.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private homeRepositoryService: HomeRepositoryService) {}
  getBannerData() {
    return this.homeRepositoryService.getBannerData();
  }

  getItemsData() {
    return this.homeRepositoryService.getItemsData();
  }

  getCategories() {
    return this.homeRepositoryService.getCategories();
  }

  getTopNews() {
    return this.homeRepositoryService.getTopNews();
  }
}
