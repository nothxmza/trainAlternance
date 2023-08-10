import { plantList } from '../data/plantList'


const Category = ({ category, setCategory, flag, setFlag }) => {

	const setValue = (e) => {
		console.log(e)
		setCategory(e.target.value)
		setFlag(true)
	}
	return (
		<div>
			<select name="category" id="category" value={category} onChange={e => setValue(e)}>
				<option value="exterieur">exterieur</option>
				<option value="plante grasse">plante grasse</option>
				<option value="classique">classique</option>
			</select>
		</div>
	)

}


export default Category