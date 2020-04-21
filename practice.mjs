
  // Object drills
  // 1. Object initializers and methods
	 const loaf = {
     	     flour: 300,
           water: 210,
           hydration: function(){
             let result = (this.water / this.flour) * 100;
             return result;
           }
   }

  console.log(loaf.flour);
  console.log(loaf.water);

  let finalResult = loaf.hydration();
  console.log(finalResult);

  // 2. Iterating over an object's properties
  let foobarObj = {
    foo: 390,
    bar: "hello",
    fum: "fo fo",
    quux: 839,
    spam: 99999999
  }

  for (let key in foobarObj) {
    console.log(key, foobarObj[key]);
  }
  // 3. Arrays in objects
  const food = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
  }
  let timeOfMeal = food.meals[3];
  console.log(timeOfMeal);

 	// 4. Arrays of objects
  // 5. Properties that aren't there

  let pers1 = {
    name: "TeCarra",
    jobTitle: "Software Engineer",
    boss: "Erica"
  };
  let pers2 = {
    name: "Taeil",
    jobTitle: "UX Designer",
    boss: "Ashley"
  };
  let pers3 = {
    name: "Andrea",
    jobTitle: "Owner"
  };
  let pers4 = {
    name: "Adam",
    jobTitle: "Data Scientist",
    boss: "Ayana"
  };

  let people = [pers1, pers2, pers3, pers4];

  people.forEach((person) => {
    if (typeof person.boss === 'undefined') {
      console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
    } else {
      console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
    }
  });

  // 6. Cracking the code
  function decode(word) {
  	let decoder = {
      a: 2,
      b: 3,
      c: 4,
      d: 5
    }

    if (word[0] in decoder) {
      let index = decoder[word[0]] - 1;
    	return word[index];
    } else {
      return ' ';
    }
  }

  function decodeWords(stringOfWords) {
  	let stringArray = stringOfWords.split(' ');
    let translation = '';

    stringArray.forEach((word) => {
    	translation += decode(word);
    });

    return translation;
  }

  let decoded = decodeWords('craft block argon meter bells brown croon droop');
  console.log(decoded);

  // 7. Factory Functions with LOTR
  function createCharacter(name, nickname, race, origin, attack, defense) {
    return{
      name: name,
      nickname: nickname,
      race: race,
      origin: origin,
      attack: attack,
      defense: defense,
      describe: function() {
        return `${this.name} is a ${this.race} from ${this.origin}`;
      },
      evaluateFight: function(character) {
        let opponentDamage = this.attack - character.defense;
        if (opponentDamage < 0) {opponentDamage = 0};
        let yourDamage = character.attack - this.defense;
        if (yourDamage < 0) {yourDamage = 0};

      	return `Your opponent takes ${opponentDamage} damage and you receive ${yourDamage} damage`;
      }
    }
  }

	let characters = [
  	createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
    createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
  ];

  characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 4, 6));

   let aragorn = characters.find(character => character.nickname === 'aragorn');

    console.log(aragorn.describe());

  let hobbits = characters.filter(character => character.race === 'Hobbit');
  console.log(hobbits);

  let strongCharacters = characters.filter(character => character.attack > 5);
