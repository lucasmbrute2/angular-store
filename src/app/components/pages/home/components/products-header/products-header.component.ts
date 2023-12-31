import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>()

  sort = 'desc'
  itemsShowCount = 12

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort
  }

  onItemsUdpated(count: number): void {
    this.itemsShowCount = count
  }

  onColumnsUpdated(columnsNum: number): void {
    this.columnsCountChange.emit(columnsNum)
  }
}
