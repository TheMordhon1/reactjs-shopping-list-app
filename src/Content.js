import React from 'react'
import LineItems from './LineItems'


const Content = ({ items, progress, setProgress, handleOnCheck, handleOnDelete }) => {

	return (
		<main>
			{items.length > 0 ?
				<LineItems
					items={items}
					progress={progress}
					setProgress={setProgress}
					handleOnCheck={handleOnCheck}
					handleOnDelete={handleOnDelete}
				/> : <p>Item is empty</p>
			}
		</main>
	)
}

export default Content