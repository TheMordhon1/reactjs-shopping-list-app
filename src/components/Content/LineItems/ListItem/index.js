import React from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri'

const ListItem = ({ item, handleOnCheck, handleOnDelete }) => {
	return (
		<li
			className="list">
			<div className="left">
				<input
					type="checkbox"
					checked={item.isChecked}
					onChange={() => {
						handleOnCheck(item.id);
					}}
				/>
				<label
					style={item.isChecked ? { textDecoration: 'line-through' } : null}
					onDoubleClick={() => {
						handleOnCheck(item.id);
					}
					}
				>{item.item}</label>
			</div>
			<RiDeleteBin5Fill
				role='button'
				tabIndex='0'
				onClick={() => {
					handleOnDelete(item.id);
				}}
			/>
		</li>
	)
}

export default ListItem