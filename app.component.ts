import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formation en ligne';
  nom = 'Grégoire';
  prenom = 'Nathan';
  age = '20';
  sexe = 'Homme';
  mail = 'n.gregoire@students.ephec.be';
  tel = '0473 012 345';
}