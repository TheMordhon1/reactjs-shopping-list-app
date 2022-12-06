import React from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri'

const ListItem = ({ item, handleOnCheck, handleOnDelete, setProgress, progress }) => {
	return (
		<li
			className="list">
			<div className="left">
				<input
					type="checkbox"
					checked={item.isChecked}
					onChange={() => {
						handleOnCheck(item.id);
						if (!item.isChecked) {
							setProgress(progress + 1);
						} else {
							setProgress(progress - 1)
						}
					}}
				/>
				<label
					style={item.isChecked ? { textDecoration: 'line-through' } : null}
					onDoubleClick={() => {
						handleOnCheck(item.id);
						if (!item.isChecked) {
							setProgress(progress + 1);
						} else {
							setProgress(progress - 1)
						}
					}
					}
				>{item.item}</label>
			</div>
			<RiDeleteBin5Fill
				role='button'
				tabIndex='0'
				onClick={() => {
					handleOnDelete(item.id);
					if (!item.id) {
						setProgress(progress + 1);
					} else {
						setProgress(progress - 1)
					}
				}}
			/>
		</li>
	)
}

export default ListItem