import React from 'react'

const FilterItem = ({ filter, setFilter }) => {
	return (
		<select value={filter} onChange={setFilter}>
			<option value="all">All</option>
			<option value="done">Done</option>
			<option value="undone">Undone</option>
		</select>
	)
}

export default FilterItem