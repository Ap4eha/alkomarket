import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Моковые данные
  private suppliers = [
    { id: 1, company_name: 'Винный двор', phone_number: '+7 (123) 456-7890' }
  ];
  
  private shops = [
    { id: 1, shop_name: 'Красное и белое - Центр', 
      shop_address: 'ул. Центральная, 1' }
  ];
  
  private products = [
    { id: 1, name: 'Вино Красное', cost: 1200, 
      description: 'Сухое красное вино', 
      company_name: 'Винный двор' }
  ];
  
  private customers = [
    { id: 1, FIO: 'Иванов Иван', 
      phone_number: '+7 (111) 222-3333' }
  ];

  getSuppliers() { return this.suppliers; }
  getShops() { return this.shops; }
  getProducts() { return this.products; }
  getCustomers() { return this.customers; }
}