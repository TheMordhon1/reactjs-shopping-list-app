import React from 'react'
import { emptyIc } from '../../icon'


const emptyStyle = {
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
	justifyContent: 'center',
	alignItems: 'center',
}
const textStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
	fontSize: '20px',
	fontWeight: '600',
}

const EmptyState = ({ text }) => {
	return (
		<div style={emptyStyle}>
			<img width={100} height={100} src={emptyIc} alt="empty-icon" />
			<p style={textStyle}>{text}</p>
		</div>
	)
}

export default EmptyState