import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'] // Corrected the 'styleUrl' to 'styleUrls'
})
export class NewsDetailsComponent implements OnInit {
  newsId: number | null = null; // To hold the news ID
  newsDetails: any; // To hold the details of the news

   // Define the categories data
   categories = [
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Sports' },
    { id: 3, name: 'Health' },
    { id: 4, name: 'Economics' },
    { id: 5, name: 'Art' },
  ];

  constructor(private route: ActivatedRoute, private homeService: HomeService) {}

  ngOnInit(): void {
    this.getDataFromId()
  }

  getDataFromId(){
     // Get the news ID from the route parameters
     this.route.paramMap.subscribe((params:any) => {
      this.newsId = +params.get('id'); // Convert the ID to a number
      this.getNewsDetails(); // Fetch the news details
    });
  }

  getNewsDetails(): void {
    this.homeService.getTopNews().subscribe((response: any) => {
      // Filter the news item by its ID
      this.newsDetails = response.News.find((newsItem: any) => newsItem.id == this.newsId);
    });
  }

    // Method to get category name based on categoryID
    getCategoryName(categoryID: number): string {
      const category = this.categories.find((cat) => cat.id == categoryID);
      return category ? category.name : 'Unknown'; // Return 'Unknown' if no match is found
    }
}
