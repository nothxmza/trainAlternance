const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		light: 2,
		water: 3,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		price: 16
	},

	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,

		price: 9
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		light: 2,
		water: 3,

		price: 20
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		price: 25
	},

	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		price: 6
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		light: 2,
		water: 3,
		price: 5
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		price: 8
	},

	{
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 10,
		price: 4
	}
];



const course =  [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      }
    ]



function displayPlantList(plantList) {
	console.log(plantList.filter((plant) => plant.water === 10).map(plant => plant.name));
}

function countExco(course) {
	console.log(course.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0));
}



function concatArray() {
	const array1 = ['a', 'b', 'c'];
	const array2 = ['d', 'e', 'f'];
	const array3 = ['d', 'e', 'f'];
	const array4 = ['d', 'e', 'f'];
	const arrra5 = array1.concat(array2, array3, array4);

	const iterator1 = array1.entries();

	console.log(iterator1.next().value);
	console.log(iterator1.next().value);
	console.log(iterator1.next().value);
}

function tabVer(){
	const isBelowThreshold = (currentValue) => currentValue < 40;
	const array1 = [1, 30, 39, 29, 10, 13];

	console.log(array1.every(isBelowThreshold));
}

function findElement() {
	const array1 = [5, 12, 8, 130, 44];
	const result = array1.find(element => element > 20);
	const resultPOs = array1.findIndex(element => element > 20);
	console.log(`${result} ${resultPOs}`);
}
//displayPlantList(plantList);
//countExco(course);
findElement();