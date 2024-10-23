import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ItemModel } from '../../modals/items';

@Component({
  selector: 'app-things-we-do',
  templateUrl: './things-we-do.component.html',
  styleUrl: './things-we-do.component.scss',
})
export class ThingsWeDoComponent implements OnInit {
  images: ItemModel[] = [];
  column1: ItemModel[] = [];
  column2: ItemModel[] = [];
  column3: ItemModel[] = [];
  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.homeService.getItemsData().subscribe((response: any) => {
      this.images = response?.items || [];

      // Ensure that we have enough images before splitting
      this.column1 = this.images.slice(0, 1); // First image
      this.column2 = this.images.slice(1, 3); // Next two images
      this.column3 = this.images.slice(3, 5); // Last two images
    });
  }

  // images = [
  //   { title: 'Transformation', imageSrc: '../../../../assets/Images/image-1.png', url: 'https://example.com/page1' },
  //   { title: 'Envision', imageSrc: '../../../../assets/Images/image-2.png', url: 'https://example.com/page2' },
  //   { title: 'Dynamics 365', imageSrc: '../../../../assets/Images/image-3.png', url: 'https://example.com/page3' },
  //   { title: 'Crafty Mind', imageSrc: '../../../../assets/Images/image-3.png', url: 'https://example.com/page4' },
  //   { title: 'Services', imageSrc: '../../../../assets/Images/image-1.png', url: 'https://example.com/page5' }
  // ];
}
