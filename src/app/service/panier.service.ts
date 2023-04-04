import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Box } from '../models/box';


@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier : Box[] = JSON.parse(localStorage.getItem('panier')|| '[]');
  private panierSubject : BehaviorSubject<Box[]> = new BehaviorSubject<Box[]>(this.panier);


  constructor() { }

    ajouterProduit(produit: Box): void {
    this.panier.push(produit);
    this.panierSubject.next(this.panier);
    localStorage.setItem('panier', JSON.stringify(this.panier));
    console.log(this.panier);
  }
    getProduits():BehaviorSubject<Box[]> {
      console.log(this.panier);
      return this.panierSubject;
    }
}