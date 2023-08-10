import CareScale from './CareScale'
import '../styles/plantItem.css'

const PlantItem = (props) => {
	const {name, cover, id, water, light} = props

	const handleClick = (e) => {
		console.log('✨ Ceci est mon message d’erreur ✨', e)
	}
		return (
			<li className='lmj-plant-item' onClick={() => handleClick(name)}>
				<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
				{name}
				<div>
					<CareScale careType='water' scaleValue={water} />
					<CareScale careType='light' scaleValue={light} />
				</div>
			</li>
		)
}

export default PlantItem