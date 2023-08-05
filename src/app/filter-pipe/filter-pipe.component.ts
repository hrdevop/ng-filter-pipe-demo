import { Component, OnInit } from '@angular/core';
import { FilterPipeService } from './filter-pipe.service';
import { Product } from './product';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.css'],
})
export class FilterPipeComponent implements OnInit {
  constructor(private _filterPipeService: FilterPipeService) {}
  products: Product[] = [];
  ngOnInit() {
    this._filterPipeService.getProduct().subscribe((res) => {
      this.products = res;
    });
  }
}
