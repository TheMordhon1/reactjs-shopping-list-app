import { useEffect } from 'react';
import { useState } from 'react';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItem from './SearchItem';

function App() {
	const [progress, setProgress] = useState(0)
	const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);
	const [newItem, setNewItem] = useState('')
	const [search, setSearch] = useState('')

	useEffect(() => {
		localStorage.setItem('shoppingList', JSON.stringify(items))
	}, [items])

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, isChecked: false, item };
		const listItems = [...items, myNewItem];
		setItems(listItems);
	}

	const handleOnCheck = (id) => {
		const listItems = items.map(item => item.id === id
			? { ...item, isChecked: !item.isChecked } : item);
		setItems(listItems);
		setItems(listItems);
	}

	const handleOnDelete = (id) => {
		const listItems = items.filter(item => item.id !== id);
		setItems(listItems);
		setItems(listItems);
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
			<SearchItem
				search={search}
				setSearch={setSearch}
			/>
			<Content
				items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
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
