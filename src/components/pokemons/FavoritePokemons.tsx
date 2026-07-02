import { createSignal, For } from "solid-js";
import type { FavoritePokemon } from "../../types/favorite-pokemon";

function getLocalStoragePokemons(): FavoritePokemon[] {
    const favoritePokemons = JSON.parse(localStorage.getItem("favorites") ?? "[]");
    return favoritePokemons;
}

export function FavoritePokemons() {
    const [pokemons, setPokemons] = createSignal<FavoritePokemon[]>(getLocalStoragePokemons());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
            <For each={pokemons()}>
                {(pokemon) => (
                    <h1>{pokemon.name}</h1>
                )}
            </For>
        </div>
    )
}