import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apis {
  readonly bannerApi = '/assets/api/banner.json';
  readonly categoriesApi = '/assets/api/categories.json';
  readonly topNewsApi = '/assets/api/news.json';
  readonly itemsApi = '/assets/api/items.json';
}
