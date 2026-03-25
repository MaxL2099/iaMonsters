package com.pokemon.controller;

import com.pokemon.entity.Player;
import com.pokemon.entity.Pokemon;
import com.pokemon.repository.PlayerRepository;
import com.pokemon.repository.PokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class GameController {

    @Autowired // 2. L'ANNOTATION pour que Spring crée l'objet
    private PlayerRepository playerRepository; // 3. LA DÉCLARATION de la variable
    @Autowired
    private PokemonRepository pokemonRepository;

    @GetMapping("/pokemons")
    public List<Pokemon> getAllPokemons() { // Le type est <Pokemon>
        return pokemonRepository.findAll(); // On utilise pokemonRepository
    }

    @GetMapping("/players")
    public List<Player> getPlayers() {
        return playerRepository.findAll(); // 4. UTILISATION (en minuscule)
    }
}