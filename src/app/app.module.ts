import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInUtilisateurComponent } from './sign-in-utilisateur/sign-in-utilisateur.component';
import { SignInResComponent } from './sign-in-res/sign-in-res.component';
import { RegisterUtilisateurComponent } from './register-utilisateur/register-utilisateur.component';
import { RegisterResponsableComponent } from './register-responsable/register-responsable.component';
import { MenuUtilisateurComponent } from './menu-utilisateur/menu-utilisateur.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { UtilisateursListeComponent } from './utilisateurs-liste/utilisateurs-liste.component';
import { ResponsablesListeComponent } from './responsables-liste/responsables-liste.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { MenuResponsableArticleComponent } from './menu-responsable-article/menu-responsable-article.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';




@NgModule({
  declarations: [
    AppComponent,
    SignInUtilisateurComponent,
    SignInResComponent,
    RegisterUtilisateurComponent,
    RegisterResponsableComponent,
    MenuUtilisateurComponent,
    MenuAdminComponent,
    UtilisateursListeComponent,
    ResponsablesListeComponent,
    ArticlesListComponent,
    MenuResponsableArticleComponent,
    AjouterArticleComponent,
    ModifierArticleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
