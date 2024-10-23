import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { CategoryModel } from '../../modals/category';
import { NewsModel } from '../../modals/news';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit {

  categories: CategoryModel[] = []; // Array to hold categories
  allNews: NewsModel[] = []; // Array to hold all News
  filteredNews: NewsModel[] = []; // Array to hold filtered news
  activeCategoryId: string | null = null; // To track the currently selected category
  showAllNews: boolean = false; // Toggle flag to show all news or just a subset

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllNews();
  }

  getAllCategories(): void {
    this.homeService.getCategories().subscribe((response: any) => {
      // Add 'All News' as the first static category
      this.categories = [{ id: null, name: 'All News' }, ...response?.newsCategory || []];
    });
  }

  getAllNews(): void {
    this.homeService.getTopNews().subscribe((response: any) => {
      this.allNews = response?.News || [];
      this.filteredNews = this.allNews; // Initially show all news
    });
  }

  // Method to filter news based on category
  filterNewsByCategory(categoryId: string): void {
    this.activeCategoryId = categoryId; // Update the active category ID
    this.showAllNews = false; // Reset to showing only 6 news items on category change

    // If categoryId is null, show all news
    if (categoryId == null) {
      this.filteredNews = this.allNews;
    } else {
      // Filter news based on the selected category ID
      this.filteredNews = this.allNews.filter(newsItem => newsItem.categoryID == categoryId);
    }
  }

  // Method to toggle between showing first 6 or all news items
  toggleShowAll(): void {
    this.showAllNews = !this.showAllNews;
  }
}
