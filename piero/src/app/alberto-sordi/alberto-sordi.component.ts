import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alberto-sordi',
  templateUrl: './alberto-sordi.component.html',
  styleUrls: ['./alberto-sordi.component.css']
})
export class AlbertoSordiComponent implements OnInit {
  names: string[]; 
  constructor() { 
    this.names = ['trattore', 'ruspa', 'mietitrebbia', 'betoniera', 'rullo compressore', 'autocarro', 'gru', 'cricchetto' ]; 
  }
  ngOnInit() {
  }
}
