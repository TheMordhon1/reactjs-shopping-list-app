import { useEffect } from 'react';
import { useState } from 'react';
import apiRequest from './api';
import { AddItem, FilterItem, Footer, Header, SearchItem } from './components';
import Content, { emptyStyle } from './components/Content';

function App() {
	const API_URL = 'http://localhost:3500/items';
	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState('');
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState('all')
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) throw Error('Did not receive expected data');
				const listItems = await response.json();
				setItems(listItems);
				setFetchError(null);
			} catch (err) {
				setFetchError(err.message);
			} finally {
				setIsLoading(false);
			}
		}
		setTimeout(() => {
			(async () => await fetchItems())();
		}, 2000);
	}, [])

	const addItem = async (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, isChecked: false, item };
		const listItems = [...items, myNewItem];
		setItems(listItems);

		const postOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json'
			},
			body: JSON.stringify(myNewItem)
		}

		const result = await apiRequest(API_URL, postOptions);
		if (result) setFetchError(result);
	}

	const handleOnCheck = async (id) => {
		const listItems = items.map(item => item.id === id
			? { ...item, isChecked: !item.isChecked } : item);
		setItems(listItems);
		setItems(listItems);

		const myItem = listItems.filter(item => item.id === id);
		const updateOptions = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'Application/json'
			},
			body: JSON.stringify({ isChecked: myItem[0].isChecked })
		}

		const reqUrl = `${API_URL}/${id}`
		const result = await apiRequest(reqUrl, updateOptions);
		if (result) setFetchError(result);
	}

	const handleOnDelete = async (id) => {
		const listItems = items.filter(item => item.id !== id);
		setItems(listItems);
		setItems(listItems);

		const deleteOptions = { method: 'DELETE' };
		const reqUrl = `${API_URL}/${id}`;
		const result = await apiRequest(reqUrl, deleteOptions);
		if (result) setFetchError(result);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;

		addItem(newItem);
		setNewItem('')
	}

	const doneFilter = items.filter(item => item.isChecked);
	const undoneFilter = items.filter(item => !item.isChecked);
	const handleFilter = (e) => {
		e.preventDefault();
		setFilter(e.target.value);

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
			<FilterItem
				filter={filter}
				setFilter={handleFilter}
			/>
			<>
				{isLoading && <p style={emptyStyle}>Loading items...</p>}
				{fetchError && <p style={emptyStyle}>{`Error: ${fetchError}`}</p>}
				{!fetchError && !isLoading &&
					<>
						{items.length > 0 && filter === "all" && <p className='total-items'>Total Item: {items.length}</p>}
						{doneFilter.length > 0 && filter === "done" && <p className='total-items'>Total Item: {`${doneFilter.length}/${items.length}`} </p>}
						{undoneFilter.length > 0 && filter === "undone" && <p className='total-items'>Total Item:  {`${undoneFilter.length}/${items.length}`}</p>}
						<Content
							items={
								filter === "all" ? items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))
									: filter === "done" ? doneFilter
										: undoneFilter
							}
							handleOnCheck={handleOnCheck}
							handleOnDelete={handleOnDelete}
							emptyState={filter}
						/>
					</>
				}
			</>
			<Footer />
		</div>
	);
}

export default App;
