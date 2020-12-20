import { GameDataResponse } from '../../models/GameDataResponse.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() games: GameDataResponse[];
  ngOnInit(): void {}
}
