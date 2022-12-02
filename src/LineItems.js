import React from 'react'
import ListItem from './ListItem'

const LineItems = ({ progress, items, handleOnCheck, handleOnDelete, setProgress }) => {
	return (
		<>
			<h3>Status: {(progress / items.length * 100).toFixed(0)}%</h3>
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
			})}</>
	)
}

export default LineItems