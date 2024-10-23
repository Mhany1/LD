import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrl: './card-news.component.scss',
})
export class CardNewsComponent implements OnInit {
  @Input() new?:any;

  // Define the categories data
  categories = [
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Sports' },
    { id: 3, name: 'Health' },
    { id: 4, name: 'Economics' },
    { id: 5, name: 'Art' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Method to get category name based on categoryID
  getCategoryName(categoryID: number): string {
    const category = this.categories.find((cat) => cat.id == categoryID);
    return category ? category.name : 'Unknown'; // Return 'Unknown' if no match is found
  }

  goToDetails(newData: { id: number }): void {
    // Navigate to the details page using the newData.id
    this.router.navigate(['/home', newData?.id]);
  }
}
