import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RegisterUtilisateurComponent} from './register-utilisateur/register-utilisateur.component';
import { RegisterResponsableComponent} from './register-responsable/register-responsable.component';
import { SignInUtilisateurComponent} from './sign-in-utilisateur/sign-in-utilisateur.component';
import { SignInResComponent} from './sign-in-res/sign-in-res.component';
import { UtilisateursListeComponent} from './utilisateurs-liste/utilisateurs-liste.component';
import { ResponsablesListeComponent} from './responsables-liste/responsables-liste.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
import { AcceuilUtilisateurComponent } from './acceuil-utilisateur/acceuil-utilisateur.component';
import { OrdinateursComponent } from './categories/ordinateurs/ordinateurs/ordinateurs.component';
import { ImprimantesComponent } from './categories/imprimantes/imprimantes/imprimantes.component';
import { AccessoiresComponent } from './categories/accessoires/accessoires/accessoires.component';
import { ErreurComponent } from './erreur/erreur.component';
import { LegoteurComponent } from './legoteur/legoteur.component';
import { PcOccassionComponent } from './pc-occassion/pc-occassion.component';
import { ListePcOccComponent } from './liste-pc-occ/liste-pc-occ.component';
import { DetailArticleResComponent } from './detail-article-res/detail-article-res.component';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuResponsableArticleComponent } from './menu-responsable-article/menu-responsable-article.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MenuUtilisateurComponent} from './menu-utilisateur/menu-utilisateur.component';
import { TousCategoriesComponent } from './categories/tous-categories/tous-categories.component';
import { VoirDetailsComponent } from './voir-details/voir-details.component';
import { NavComponent } from './nav/nav.component';
import { PanierComponent } from './panier/panier.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FinCommandeComponent } from './fin-commande/fin-commande.component';
import { ComposantsComponent } from './categories/composants/composants.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuUtilisateurComponent,
    DetailArticleResComponent,
    SignInUtilisateurComponent,
    SignInResComponent,
    RegisterUtilisateurComponent,
    RegisterResponsableComponent,
    PcOccassionComponent,
    ListePcOccComponent,
    SignInUtilisateurComponent,
    MenuAdminComponent,
    UtilisateursListeComponent,
    ResponsablesListeComponent,
    ArticlesListComponent,
    MenuResponsableArticleComponent,
    AjouterArticleComponent,
    ModifierArticleComponent,
    AcceuilUtilisateurComponent,
    OrdinateursComponent,
    AccessoiresComponent,
    ImprimantesComponent,
    ErreurComponent,
    FooterComponent,
    LegoteurComponent,
    TousCategoriesComponent,
    VoirDetailsComponent,
    NavComponent,
    PanierComponent,
    CheckoutComponent,
    FinCommandeComponent,
    ComposantsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
