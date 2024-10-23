import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { BannerModel } from '../../modals/banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  bannerSliders: BannerModel[] = []; // Initialize as an empty array
  currentIndex: number = 1; // Set initial index to 1 (second slide)
  languages = [
    { id: 'en', name: 'EN' },
    { id: 'ar', name: 'AR' },
  ];

  selectedLanguage: any = 'en';

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    // Triggered after a slide transition completes
    document
      .getElementById('bannerCarousel')
      ?.addEventListener('slid.bs.carousel', () => {
        this.onSlideChange();
      });
    this.getAllSliderData();
    
  }

  getAllSliderData() {
    this.homeService.getBannerData().subscribe((response: any) => {
      this.bannerSliders = response?.slides || [];
      if (this.bannerSliders.length > 0) {
        this.goToSlide(this.currentIndex); // Set the first slide as active
      }
    });
  }

  onLanguageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedLanguage = selectElement.value;
  }

  goToSlide(index: number): void {
    this.currentIndex = index; // Update the current index when user clicks a circle
    const carouselElement = document.getElementById('bannerCarousel');
    const slideTo =
      carouselElement?.querySelectorAll<HTMLElement>('.carousel-item')[index];

    if (slideTo) {
      // Deactivate all slides
      carouselElement
        ?.querySelectorAll<HTMLElement>('.carousel-item')
        .forEach((item) => {
          item.classList.remove('active');
        });

      // Activate the selected slide
      slideTo.classList.add('active');
    }
  }

  getBackgroundImage(order: number): string {
    switch (order) {
      case 1:
        return 'url("../../../../assets/Images/orange_line.png")';
      case 3:
        return 'url("../../../../assets/Images/pink_line.png")';
      case 2:
        return 'url("../../../../assets/Images/green_line.png")';
      default:
        return 'none'; // No background for orders not matched
    }
  }

  onSlideChange(): void {
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
      if (item.classList.contains('active')) {
        this.currentIndex = index; // Update currentIndex based on active slide
      }
    });
  }
}
