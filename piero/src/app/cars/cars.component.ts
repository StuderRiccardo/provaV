import {
  Component,
  OnInit,
  Input // <--- aggiungi questo
 } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
  @Input() name: string; // <-- Aggiungi la notazione @input

  constructor() {
   this.name = '' // Rimuovi l'impostazione del nome
  }

  ngOnInit() {}
}
