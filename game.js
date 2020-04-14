class Game {
	constructor() {
		this.playersArray = [];
		this.turnLeft = 10;
	}

	startGame = () => {
		let p1 = new Assassin();
		let p2 = new Berzerker();
		let p3 = new Fighter();
		let p4 = new Healer();
		let p5 = new Paladin;
		this.playersArray.push(p1, p2, p3, p4, p5);

		let createCharacter = prompt('Souhaites-tu créer un personnage ? (oui/non)');
		if (createCharacter =='oui') {
			console.log('********** Types de personnages disponibles **********')
			this.playersArray.forEach(p => console.log(`${p.constructor.name} : ${p.hp} hp, ${p.mana} mana et ${p.dmg} dmg`));
			let characterType = prompt('Quel type de personnage souhaites-tu être ? (ex : Assassin)');
			let characterName = prompt(`Comment souhaites-tu appeller ton ${characterType} ?`);

			if (characterType == 'Assassin'){
				let userCharacter = new Assassin();
				userCharacter.name = characterName;
				userCharacter.hp = prompt(`Un ${characterType} possède ${p1.hp} hp. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				userCharacter.mana = prompt(`Un ${characterType} possède ${p1.mana} mana. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				userCharacter.dmg = prompt(`Un ${characterType} possède ${p1.dmg} dmg. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				this.playersArray.push(userCharacter);
			} else if (characterType == 'Berzerker') {
				let userCharacter = new Berzerker();
				userCharacter.name = characterName;
				userCharacter.hp = prompt(`Un ${characterType} possède ${p1.hp} hp. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				userCharacter.mana = prompt(`Un ${characterType} possède ${p1.mana} mana. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				userCharacter.dmg = prompt(`Un ${characterType} possède ${p1.dmg} dmg. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				this.playersArray.push(userCharacter);
			} else if (characterType == 'Fighter') {
				let userCharacter = new Fighter();
				userCharacter.name = characterName;
				userCharacter.hp = prompt(`Un ${characterType} possède ${p1.hp} hp. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				userCharacter.mana = prompt(`Un ${characterType} possède ${p1.mana} mana. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				userCharacter.dmg = prompt(`Un ${characterType} possède ${p1.dmg} dmg. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				this.playersArray.push(userCharacter);
			} else if (characterType == 'Healer') {
				let userCharacter = new Healer();
				userCharacter.name = characterName;
				userCharacter.hp = prompt(`Un ${characterType} possède ${p1.hp} hp. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				userCharacter.mana = prompt(`Un ${characterType} possède ${p1.mana} mana. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				userCharacter.dmg = prompt(`Un ${characterType} possède ${p1.dmg} dmg. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				this.playersArray.push(userCharacter);
			} else if (characterType == 'Paladin') {
				let userCharacter = new Paladin();
				userCharacter.name = characterName;
				userCharacter.hp = prompt(`Un ${characterType} possède ${p1.hp} hp. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				userCharacter.mana = prompt(`Un ${characterType} possède ${p1.mana} mana. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				userCharacter.dmg = prompt(`Un ${characterType} possède ${p1.dmg} dmg. Combien souhaites-tu en donner à ${userCharacter.name} ?`);
				this.playersArray.push(userCharacter);
			}

		}

		console.log('********** Combatants **********');
		this.playersArray.forEach(p => console.log(`${this.playersArray.indexOf(p) + 1} - ${p.name}, ${p.constructor.name} : ${p.hp} hp, ${p.mana} mana et ${p.dmg} dmg`));
		console.log('********** Combat ! **********');
		myGame.startTurn();
	}

	shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	startTurn = () => {
		console.log(`Tour n°${11 - this.turnLeft}`);
		myGame.shuffle(this.playersArray);
		this.playersArray.forEach(p => {
			myGame.watchStats();
			console.log(`C'est au tour de ${p.name} de combattre !`);
			let properties = Object.getOwnPropertyNames(p);
			let lastProperty = properties[properties.length - 1];
			let userAttack = prompt(`${p.name} peux attaquer ou utiliser ${lastProperty.charAt(0).toUpperCase() + lastProperty.slice(1)}, le pouvoir spécial des ${p.constructor.name}s (attack/${lastProperty.toLowerCase()})`);
			let userVictimIndex = prompt(`Qui sera la victime de ${p.name} ? (n° combatant, ex: 1)`);
			let userVictim = this.playersArray[userVictimIndex - 1];
			if (userAttack == 'attack') {
				p.dealDamage(userVictim);
				console.log(`${p.name} attaque ${userVictim.name} et lui inflige ${p.dmg} dmg. ${userVictim.name} a ${userVictim.hp} hp restants.`);
			} else if (userAttack == lastProperty.toLowerCase()) {
				if (p.constructor.name == 'Assassin') {
					p.superShield();
				} else if (p.constructor.name == 'Berzerker') {
					p.sacredFury();
				} else if (p.constructor.name == 'Fighter') {
					p.darkVision();
				} else if (p.constructor.name == 'Healer') {
					p.phoenix();
				} else if (p.constructor.name == 'Paladin') {
					p.lighting(userVictim);
				}
			}
			if (userVictim.hp <= 0) {
				userVictim.isDead();
				p.killed();
			}
		});
		myGame.skipTurn();

		// 4. Une fois que tous les joueurs on joué,
		// on log l'ensemble des personnages encore en vie et on utilise skipTurn.
		// * S'il ne reste plus qu'un joueur en vie, il devient le winner et la partie s'arrête.

		// Au bout de 10 tours où bien quand il ne reste plus qu'un personnage,
		// ... le/les personnnage(s) encore en vie gagne(nt).
	}

	skipTurn = () => {
		this.turnLeft = this.turnLeft - 1;
		if (this.turnLeft <= 0) {
			console.log('Combat terminé !');
		} else {
			myGame.startTurn();
		}

		// Une fois à 0, la partie est terminée,
		// et les personnages restants gagnent,
		// voyant ainsi leur paramètre status passer à winner.
	}

	watchStats = () => {
		console.log('---------- Stats ----------');
		this.playersArray.forEach(p => console.log(`${p.status} : ${this.playersArray.indexOf(p) + 1} - ${p.name}, ${p.constructor.name} : ${p.hp} hp, ${p.mana} mana et ${p.dmg} dmg`));
		console.log('---------------------------');
	}
}

myGame = new Game();
document.getElementById('newgame').onclick = myGame.startGame;