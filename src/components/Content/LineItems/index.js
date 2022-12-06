import React from 'react'
import ListItem from './ListItem'

const LineItems = ({ items, handleOnCheck, handleOnDelete }) => {
	return (

		<ul>
			{items.map(item => {
				return (
					<ListItem
						key={item.id}
						item={item}
						handleOnCheck={handleOnCheck}
						handleOnDelete={handleOnDelete}
					/>
				)
			})}
		</ul>

	)
}

export default LineItems