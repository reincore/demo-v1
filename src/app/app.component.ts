import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameDataResponse } from './models/GameDataResponse.model';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public games: GameDataResponse[];
  public filteredGames: GameDataResponse[];
  private subscription: Subscription = new Subscription();

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getGames();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  private getGames(): void {
    this.subscription.add(
      this.gameService.getGames().subscribe(games => {
        this.games = games;
        this.filteredGames = games;
      })
    );
  }

  public filterGames(searchText: string): void {
    const lowerCaseSearchText = searchText.toLowerCase();
    this.filteredGames = this.games.filter(
      game =>
        game.bundle.toLowerCase().includes(lowerCaseSearchText) ||
        game.studio.toLowerCase().includes(lowerCaseSearchText) ||
        game.name.toLowerCase().includes(lowerCaseSearchText)
    );
  }
}
