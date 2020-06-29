import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // Liste historique des combats
  listeCombats = Array<string>();
  iaChoice = '';
  score = 0;

  ngOnInit(): void {
    // Peut être utilisé si le choix de l'IA s'effectue après coup via une API
  }

  // On obtient un chiffre entre min et max
  getRandomArbitrary(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // On traduit le choix IA
  getiaChoice(): string{
    let iaChoice: any = this.getRandomArbitrary(1, 4);
    switch (iaChoice) {
      case 3:
        iaChoice = 'ciseaux';
        break;
      case 2:
        iaChoice = 'feuille';
        break;
      case 1:
        iaChoice = 'pierre';
        break;
    }
    return iaChoice;
  }

  validerChoix(shifumi: string): void{
    // On génère le choix de l'IA
    this.iaChoice = this.getiaChoice();

    // On ajoute à l'historique des combats
    this.listeCombats.push(shifumi + ' - ' + this.iaChoice + '\n');
    switch (shifumi) {
      case 'pierre':
        if (this.iaChoice === 'ciseaux'){
          this.score++;
        }
        break;
      case 'feuille':
        if (this.iaChoice === 'pierre'){
          this.score++;
        }
        break;
      case 'ciseaux':
        if (this.iaChoice === 'feuille'){
          this.score++;
        }
        break;
    }
  }
}
