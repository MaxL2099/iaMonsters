Crée moi une Phase 1 d'un jeu Pokémon simplifié et niveau junior. Voici le contexte technique complet :
Stack technique :
* Frontend : Angular + Phaser 3
* Backend : Spring Boot (Java), ouvert sur IntelliJ
* Base de données : PostgreSQL via Supabase
* URL de connexion : postgresql://postgres:[PASSWORD]@db.1xxvmmenymhnkgjrnyt.supabase.co:5432/postgres
Répartition des responsabilités frontend :
* Angular gère toute l'UI :
   * Écran d'accueil (menu principal, saisie du nom du joueur)
   * Interface de combat (boutons d'attaque, barres de HP, log de texte)
   * Écran Pokédex (stats et attaques des 4 Pokémon)
   * Écran de résultat (victoire / défaite)
   * HUD autour du canvas Phaser
* Phaser 3 gère uniquement :
   * L'affichage de la mini-carte
   * Le déplacement du joueur sur la carte
   * La détection de collision avec le dresseur ennemi (déclenchement du combat)
Périmètre fonctionnel (Phase 1 — très simple) :
* 4 Pokémon au total : 2 pour le joueur, 2 pour le dresseur adverse 
* Une mini-carte de test d'environ 50 tiles (carte fixe, pas de génération procédurale)
* Un seul dresseur ennemi à battre sur la carte
* Système de combat au tour par tour basique (attaque simple uniquement)
* Communication entre Phaser et Angular via un service Angular partagé
Ce que j'attends :
1. La structure complète du projet (Angular et Spring Boot) avec les fichiers clés à créer
2. Le schéma SQL des tables à créer sur la base Supabase (pokémon, joueur, combat, etc.)
3. Le code Phaser pour afficher la mini-carte et le déplacement du joueur
4. Le code Angular pour chaque écran (accueil, combat, pokédex, résultat)
5. Le service Angular partagé (GameStateService) pour la communication Phaser ↔ Angular
6. Les endpoints Spring Boot nécessaires (REST API)
7. Les entités JPA et repositories Java
8. Les instructions pas à pas pour tout lancer depuis IntelliJ
Contraintes importantes :
* Rester très simple, c'est une base de travail, pas un produit fini
* Pas de système d'authentification
* Pas de multijoueur
* Pas de génération procédurale
* Code commenté et lisible
