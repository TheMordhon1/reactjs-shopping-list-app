import React from 'react'
import ListItem from './ListItem'

const LineItems = ({ progress, items, handleOnCheck, handleOnDelete, setProgress }) => {
	return (

		<ul>
			{items.map(item => {
				return (
					<ListItem
						key={item.id}
						item={item}
						handleOnCheck={handleOnCheck}
						handleOnDelete={handleOnDelete}
						progress={progress}
						setProgress={setProgress}
					/>
				)
			})}
		</ul>

	)
}

export default LineItems