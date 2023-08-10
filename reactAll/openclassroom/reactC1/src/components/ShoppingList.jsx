import { plantList } from '../data/plantList'
import '../styles/shopingList.css'
import Category from './Category';
import PlantItem from './PlantItem';
import { useState } from 'react';

const ShoppingList = ({cart, updateCart}) => {
	const [category, setCategory] = useState('')
	const [flag, setFlag] = useState(true)
	console.log(category)
	let tab = [];
	const cate = plantList.reduce((acc,plant) => {
		if(tab.includes(plant.category)) {
			return acc
		} else {
			tab.push(plant.category)
		}
	})

	const reset = () => {
		setFlag(false)
	}
	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}
	return (
		<div>
			<Category category={category} setCategory={setCategory} flag={flag} setFlag={setFlag} />
			<button onClick={() => reset()}>Tout afficher</button>
			<ul className='lmj-plant-list'>
				{flag && plantList.filter((plant) => category == plant.category).map((plant) => (
					<div key={plant.id}>
					<PlantItem cover={plant.cover} name={plant.name} water={plant.water} light={plant.light} price={plant.price} />
					<button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
				</div>
				))} :
				{!flag && plantList.map((plant) => ( 
					<div key={plant.id}>
					<PlantItem cover={plant.cover} name={plant.name} water={plant.water} light={plant.light} price={plant.price} />
					<button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
				</div> ))}
			</ul>
		</div>
		
	)
}

export default ShoppingList
