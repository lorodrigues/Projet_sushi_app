import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ProduitComponent } from './component/produit/produit.component';
import { ProduitsComponent } from './component/produits/produits.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './component/details/details.component';
import { PanierComponent } from './component/panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProduitComponent,
    ProduitsComponent,
    DetailsComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
