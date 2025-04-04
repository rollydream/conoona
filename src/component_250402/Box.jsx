// rafce 
import React from 'react'

const Box = (props) => {
	let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

	return (
		<div className={`${result}`}>
			<h1>{props.title}</h1>
			<h2>{result}</h2>
			<div className='boxImg'>
				<img src={props.item && props.item.img} alt="" />
			</div>
			<p>{props.item && props.item.name}</p>
		</div>
	)
}

export default Box
