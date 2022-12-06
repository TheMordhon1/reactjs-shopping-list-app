import React from 'react'
import EmptyState from '../EmptyState'
import LineItems from './LineItems'

export const emptyStyle = {
	flex: 1,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}
const Content = ({ items, handleOnCheck, handleOnDelete }) => {
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
				: <EmptyState text='Item is empty' />
			}
		</main>
	)
}

export default Content