import { useEffect } from 'react';
import { useState } from 'react';
import AddItem from './AddItem';
import Content, { emptyStyle } from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItem from './SearchItem';

function App() {
	const API_URL = 'http://localhost:3500/items';
	const [progress, setProgress] = useState(0);
	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState('');
	const [search, setSearch] = useState('');
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) throw Error('Did not receive expected data')
				const listItems = await response.json();
				console.log(listItems);
				setItems(listItems);
				setFetchError(null);
			} catch (err) {
				setFetchError(err.message)
			} finally {
				setIsLoading(false);
			}
		}
		setTimeout(() => {
			(async () => await fetchItems())();
		}, 2000);
	}, [])

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
			<>
				{isLoading && <p style={emptyStyle}>Loading items...</p>}
				{fetchError && <p style={emptyStyle}>{`Error: ${fetchError}`}</p>}
				{!fetchError && !isLoading &&
					<Content
						items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
						progress={progress}
						setProgress={setProgress}
						handleOnCheck={handleOnCheck}
						handleOnDelete={handleOnDelete}
					/>
				}
			</>
			<Footer />
		</div>
	);
}

export default App;
