import { GameDataResponse } from '../models/game-data-response';
import { RESPONSE } from './../mock-data/mock-response';
import { Component, OnInit } from '@angular/core';
import { GameService } from './../game.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  games: GameDataResponse[];
  filteredGames: GameDataResponse[] | [];

  constructor(private gameService: GameService) {}

  getGames(): void {
    this.gameService.getGames().subscribe(games => (this.games = games));
  }

  ngOnInit(): void {
    this.getGames();
  }
}
