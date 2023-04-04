import { Component, OnInit } from '@angular/core';
import { MyApiService } from 'src/app/service/my-api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
[x: string]: any;

  produits: any[] = [];

  constructor(private myApiService:MyApiService) {}

  ngOnInit() {
    this.myApiService.getProduits().subscribe((data: any) => {
        this.produits = data;
      }

    );
  }
}
