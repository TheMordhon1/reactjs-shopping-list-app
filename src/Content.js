import React from 'react'
import EmptyState from './EmptyState'
import LineItems from './LineItems'
import ProgressComp from './ProgressComp'


const Content = ({ items, progress, setProgress, handleOnCheck, handleOnDelete }) => {
	const emptyStyle = {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}
	return (
		<main style={items.length > 0 ? { flex: 1 } : emptyStyle}>
			{items.length > 0 ?
				<div style={{ margin: '10px' }}>
					<ProgressComp items={items} progress={progress} />
					<LineItems
						items={items}
						progress={progress}
						setProgress={setProgress}
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