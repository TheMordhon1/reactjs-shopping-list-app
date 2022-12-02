import React from 'react'
import LineItems from './LineItems'
import ProgressComp from './ProgressComp'


const Content = ({ items, progress, setProgress, handleOnCheck, handleOnDelete }) => {

	return (
		<main>
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
				: <p>Item is empty</p>
			}
		</main>
	)
}

export default Content