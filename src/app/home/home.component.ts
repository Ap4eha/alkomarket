import { Component } from '@angular/core';
import { DataService } from '../data.service';

interface Activity {
  type: string;
  details: string;
  time: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private dataService: DataService) {}

  get stats() {
    return {
      suppliersCount: this.dataService.getSuppliers()?.length || 0,
      shopsCount: this.dataService.getShops()?.length || 0,
      productsCount: this.dataService.getProducts()?.length || 0,
      customersCount: this.dataService.getCustomers()?.length || 0
    };
  }

  recentActivities: Activity[] = [
    {
      type: 'Обновление',
      details: 'Добавлен новый поставщик',
      time: '10 минут назад'
    }
  ];
}