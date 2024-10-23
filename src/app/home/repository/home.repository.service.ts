import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apis } from '../enum/apis.enum';

@Injectable({
  providedIn: 'root',
})
export class HomeRepositoryService {
  constructor(private _http: HttpClient, private enumApis: Apis) {}
  getBannerData(): Observable<any> {
    return this._http.get<any>(this.enumApis.bannerApi);
  }

  getItemsData(): Observable<any> {
    return this._http.get<any>(this.enumApis.itemsApi);
  }

  getCategories(): Observable<any> {
    return this._http.get<any>(this.enumApis.categoriesApi);
  }

  getTopNews(): Observable<any> {
    return this._http.get<any>(this.enumApis.topNewsApi);
  }
}
