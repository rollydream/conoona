import React from 'react'
import counterStore from '../stores_250412/counterStore'

const CountBox = () => {
	{/* props로 값을 전달 전달할 필요가 없고 중앙 관리하는 곳에서 가져와서 사용하면 된다 */}
	const {count} = counterStore()

	return (
		<div className="text-center mt-2">
			
			<h3>CountBoxCount : Count:{count}</h3>
		</div>
	)
}

export default CountBox
