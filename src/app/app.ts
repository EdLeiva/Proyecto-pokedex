import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { PokemonList } from './pages/pokemon-list/pokemon-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, PokemonList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pokedex');
}
