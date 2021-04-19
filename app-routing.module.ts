import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  { path: 'profil', component: ProfilComponent },
  { path: 'formulaire', component: FormulaireComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }