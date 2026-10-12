export interface PokemonInterface {
    id: number;
    nombre: string;
    height: number;
    weight: number;
    base_experiencia: number;
    sprites: {
        front_default: string;
        other: {
            'official_artwork': {
                front_default: string;
            }
        }
    } 
    types: PokemonType[];
    stats: PokemonStat[];
    abilities: PokemonAbility[];


}

export interface PokemonType{
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export interface PokemonStat{
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

export interface PokemonAbility{
    ability: {
        name: string;
        url: string;
    }
    is_hidden: boolean;
}

export interface PokemonListResponse{
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];

}

export interface PokemonListItem{
    name: string;
    url: string;
}


