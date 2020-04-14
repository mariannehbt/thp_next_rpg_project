class Character {
	constructor(name, hp, mana, dmg, shield, status) {
		this.name = name;
		this.hp = hp;
		this.mana = mana;
		this.dmg = dmg;
		this.shield = shield
		this.status = status;
	}

	dealDamage = (victim) => {
		victim.hp = victim.hp - this.dmg;
	}

	isDead = () => {
		this.status = 'loser';
		console.log(`${this.name} est mort(e)`);
	}

	killed = () => {
		this.mana = this.mana + 20;
		console.log(`${this.name} tue sa victime et gagne 20 pts de mana. Il/elle a maintenant ${this.mana} pts de mana.`);
	}

	takeDamage = () => {
		// Tout ces personnages ont une méthode takeDamage, prenant en paramètre le nombre de dégats à recevoir.
	}

	// Si jamais les PV d'un personnage tombent à 0, il est éliminé et ne peut plus jouer ni être attaqué.
	// Son status passe alors à loser.
}