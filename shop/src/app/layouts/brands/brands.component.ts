import {Component, OnInit} from '@angular/core';
import {BrandService} from "./brand.service";

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brands;

  constructor(private brandService: BrandService) {
  }

  ngOnInit() {
    this.brandService.getBrands().subscribe(
      response => this.brands = response
    )
  }

}
