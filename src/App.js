import { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
	const [progress, setProgress] = useState(0)
	const [items, setItems] = useState([
		{
			id: 1,
			isChecked: false,
			item: "my item 1"
		},
		{
			id: 2,
			isChecked: false,
			item: "my item 2"
		},
		{
			id: 3,
			isChecked: false,
			item: "my item 3"
		},
		{
			id: 4,
			isChecked: false,
			item: "my item 4"
		},
		{
			id: 5,
			isChecked: false,
			item: "my item 5"
		},
		{
			id: 6,
			isChecked: false,
			item: "my item 6"
		},
	])

	const handleOnCheck = (id) => {
		const listItems = items.map(item => item.id === id
			? { ...item, isChecked: !item.isChecked } : item);
		setItems(listItems);
	}

	const handleOnDelete = (id) => {
		const listItems = items.filter(item => item.id !== id);
		setItems(listItems);
	}

	return (
		<div className="App">
			<Header />
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
