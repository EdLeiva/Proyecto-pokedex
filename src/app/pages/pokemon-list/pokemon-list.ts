import { Component, OnInit, OnDestroy, inject, signal, computed,
  PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonListItem } from '../../interfaces/pokemon.interface';
import { PokemonCard } from '../../components/pokemon-card/pokemon-card';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCard, ReactiveFormsModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
})

export class PokemonList {
  private pokemonService = inject(PokemonService);
  private platformId = inject(PLATFORM_ID);
  private sub?: Subscription;

  pokemons = signal<PokemonListItem[]>([]);
  cargando = signal(false);
  error = signal('');
  paginaActual = signal(1);
  totalCount = signal(0);
  readonly limit = 21;

  busqueda = new FormControl("", { nonNullable: true });
  
  busquedaSignal = signal('');

  pokemonsFiltrados = computed(() => {
    const filtro = this.busquedaSignal(). toLowerCase().trim();
  })


}



