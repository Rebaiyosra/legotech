import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUtilisateurComponent} from './register-utilisateur/register-utilisateur.component';
import { RegisterResponsableComponent} from './register-responsable/register-responsable.component';
import { SignInUtilisateurComponent} from './sign-in-utilisateur/sign-in-utilisateur.component';
import { SignInResComponent} from './sign-in-res/sign-in-res.component';
import { UtilisateursListeComponent} from './utilisateurs-liste/utilisateurs-liste.component';
import { ResponsablesListeComponent} from './responsables-liste/responsables-liste.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
const routes: Routes = [
  {path:'register-utilisateur', component:RegisterUtilisateurComponent},
  {path:'register-responsable', component:RegisterResponsableComponent},
  {path:'sign-utilisateur', component:SignInUtilisateurComponent},
  {path:'sign-res', component:SignInResComponent},
  {path:'liste-utilisateur', component:UtilisateursListeComponent},
  {path:'liste-responsable', component:ResponsablesListeComponent},
  {path:'liste-article',component:ArticlesListComponent },
  {path:'ajouter-article',component:AjouterArticleComponent },
  {path:'modifier-article',component:ModifierArticleComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
