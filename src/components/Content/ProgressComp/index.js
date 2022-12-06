import React from 'react'

const ProgressComp = ({ progress, items }) => {
	const countProgress = parseInt((progress / items.length * 100).toFixed(0));

	const border = {
		backgroundColor:
			countProgress === 100 ? 'green' :
				countProgress >= 75 ? 'royalblue' :
					countProgress >= 50 ? 'yellow' :
						countProgress < 50 && 'red',
		height: '5px',
		width: `${countProgress}%`,
		maxWidth: '100%',
	}
	return (
		<>
			<h3 style={{ margin: '10px' }}>
				{countProgress === 100
					? <>Ready to Packed</>
					: <>{countProgress}% to Finish</>
				}
			</h3>
			<div style={border} />
		</>
	)
}

export default ProgressComp