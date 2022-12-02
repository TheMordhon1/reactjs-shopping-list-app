import { useState } from 'react';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
	const [progress, setProgress] = useState(0)
	const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);
	const [newItem, setNewItem] = useState('')

	const setAndSaveItems = (newItems) => {
		setItems(newItems);
		localStorage.setItem('shoppingList', JSON.stringify(newItems))
	}

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, isChecked: false, item };
		const listItems = [...items, myNewItem];
		setAndSaveItems(listItems);
	}

	const handleOnCheck = (id) => {
		const listItems = items.map(item => item.id === id
			? { ...item, isChecked: !item.isChecked } : item);
		setItems(listItems);
		setAndSaveItems(listItems);
	}

	const handleOnDelete = (id) => {
		const listItems = items.filter(item => item.id !== id);
		setItems(listItems);
		setAndSaveItems(listItems);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;

		addItem(newItem);
		setNewItem('')
	}

	return (
		<div className="App">
			<Header />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<Content
				items={items}
				progress={progress}
				setProgress={setProgress}
				handleOnCheck={handleOnCheck}
				handleOnDelete={handleOnDelete}
			/>
			<Footer />
		</div>
	);
}

export default App;
