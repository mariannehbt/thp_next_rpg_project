class Fighter extends Character {
	constructor(name = 'Grace', hp = 12, mana = 40, dmg = 4, shield = 0, status = 'playing') {
		super(name, hp, mana, dmg, shield, status);
	}

	darkVision = () => {
		// Inflige 5 dégats : lors du prochain tour, il prendra 2 dégats de moins par coup reçu
		// Elle coute 20 mana
		console.log(`${this.name} utilise DarkVision`);
	} 
}