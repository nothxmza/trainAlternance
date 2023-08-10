import { useState } from 'react'
import '../styles/footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	const blur = () => {
		if(!inputValue.includes('@')) {
			alert('manque @ !')
		}
	}
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input type="text"onChange={(e) => setInputValue(e.target.value)} onBlur={blur}/>
		</footer>
	)
}

export default Footer