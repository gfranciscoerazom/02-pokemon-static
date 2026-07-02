import { createSignal, Show, type Component } from "solid-js";
import type { FavoritePokemon } from "../../types/favorite-pokemon";

type Props = {
    readonly pokemon: FavoritePokemon;
}

export function FavoritePokemonCard({ pokemon }: Props) {
    const [isVisible, setIsVisible] = createSignal(true);
    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    function deleteFavorite() {
        const favorites = JSON.parse(localStorage.getItem("favorites") ?? "[]") as FavoritePokemon[];
        const newFavorites = favorites.filter((p: FavoritePokemon) => p.id !== pokemon.id);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setIsVisible(false);
    }

    return (
        <Show when={isVisible()}>
            <div class="flex flex-col justify-center items-center">
                <a href={`/pokemons/${pokemon.name}`}>
                    <img
                        src={imageSrc}
                        alt={pokemon.name}
                        class="w-32 h-32 object-contain"
                        style={`view-transition-name: ${pokemon.name}-image`}
                    />
                    <p class="capitalize">
                        #{pokemon.id} - {pokemon.name}
                    </p>
                </a>
                <button class="text-red-500" onclick={deleteFavorite}>Borrar</button>
            </div>
        </Show>
    )
}