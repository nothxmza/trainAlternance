

const CareScale = (props) => {
	const { scaleValue, careType } = props;
	const range = [1, 2, 3]

	const scaleType = careType === 'light' ? '☀️' : '💧'

	const quantity = (scaleValue, scaleType) => {
		let word;
		if(scaleValue === 1)
			word = 'beaucoup';
		else if(scaleValue === 2)
			word = 'moyennement';
		else
			word = 'peu';
		alert(`Cette plante requiert ${word} ${scaleType === '☀️' ? 'de lumière' : "d'arrosage"}`)
		console.log( scaleType)
	}

	return (
		<div onClick={() => quantity(scaleValue,scaleType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale