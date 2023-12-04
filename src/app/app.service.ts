import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  itemList: String[] = ['Laptop', 'Mouse', 'Keyword', 'CPU', 'Harddisk', 'SSD'];
  getItem() {
    return this.itemList;
  }
}
