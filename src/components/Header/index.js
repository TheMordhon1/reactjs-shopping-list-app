import React from 'react'

const Header = () => {
	const headerStyle = {
		backgroundColor: 'royalblue',
		color: '#fff',
		marginBottom: '10px',
		padding: '10px'
	}
	return (
		<header style={headerStyle}>
			<h1>Groceries List</h1>
		</header>
	)
}

export default Header