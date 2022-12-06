import React from 'react'
import EmptyState from '../EmptyState'
import LineItems from './LineItems'

export const emptyStyle = {
	flex: 1,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}
const Content = ({ items, handleOnCheck, handleOnDelete, emptyState }) => {
	return (
		<main style={items.length > 0 ? { flex: 1 } : emptyStyle}>
			{items.length > 0 ?
				<div style={{ margin: '10px' }}>
					<LineItems
						items={items}
						handleOnCheck={handleOnCheck}
						handleOnDelete={handleOnDelete}
					/>
				</div>
				: <EmptyState
					text={
						emptyState === "all" ? "Please add item"
							: emptyState === "done" ? "Please check any item"
								: "All items is done"
					}
				/>
			}
		</main>
	)
}

export default Content