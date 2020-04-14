class Berzerker extends Character {
	constructor(name = 'Draven', hp = 8, mana = 0, dmg = 4, shield = 0, status = 'playing') {
		super(name, hp, mana, dmg, shield, status);
	}

	sacredFury = () => {
		this.hp = this.hp - 1;
		this.dmg = this.dmg + 1;
		console.log(`${this.name} utilise SacredFury : il/elle sacrifie 1 hp pour gagner 1 dmg supplémentaire jusqu'à la fin du combat. Il/elle a maintenant ${this.hp} hp et ${this.dmg} dmg.`);
	}
}