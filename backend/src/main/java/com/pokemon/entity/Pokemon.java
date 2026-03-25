package com.pokemon.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Pokemon {
    @Id @GeneratedValue
    private Long id;
    private String name;
    private int hp;
    private int attack;
    private int owner_id;
}