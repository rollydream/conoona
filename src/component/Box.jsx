// rafce 
import React from 'react'

const Box = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			<div className='boxImg'>
				<img src={props.item && props.item.img} alt="" />
			</div>
			<p>{props.item && props.item.name}</p>
		</div>
	)
}

export default Box
