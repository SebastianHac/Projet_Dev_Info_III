import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  nom = 'Grégoire';
  prenom = 'Nathan';
  age = '20';
  sexe = 'Homme';
  mail = 'n.gregoire@students.ephec.be';
  tel = '0473 012 345';
}