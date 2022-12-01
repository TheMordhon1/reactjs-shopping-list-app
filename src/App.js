import './App.css';

function App() {
	const handleNameChange = () => {
		const names = ['Bob', 'Kevin', 'Dave']
		const int = Math.floor(Math.random() * 3)

		return names[int]
	}
	return (
		<div className="App">
			Hello {handleNameChange()}!
		</div>
	);
}

export default App;
