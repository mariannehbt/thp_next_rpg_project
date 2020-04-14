class Assassin extends Character {
	constructor(name = 'Carl', hp = 6, mana = 20, dmg = 6, shield = 0, status = 'playing') {
		super(name, hp, mana, dmg, shield, status);
	}

	superShield = () => {
		// Permet de ne pas prendre de dégat lors du prochain tour
		// Porte alors une attaque infligeant 7 dégats
		// Puis, si l'adversaire n'est pas mort, lui rendant 7 dégats
		// Elle coute 20 mana
		console.log(`${this.name} utilise SuperShield`);
	}
}