import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProduitsComponent } from './component/produits/produits.component';
import { DetailsComponent } from './component/details/details.component';
import { PanierComponent } from './component/panier/panier.component';

const routes: Routes = [
{path: '', component: HomeComponent} , 
{path: 'produits', component: ProduitsComponent},
{path: 'box-details/:id', component: DetailsComponent},
{path: 'panier', component: PanierComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }