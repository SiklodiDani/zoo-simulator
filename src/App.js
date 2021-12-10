import './App.css';
import Animal from './components/animal';
import FeedAnimals from './components/feedAnimals';
import SkipTime from './components/skipTime';
import Time from './components/time';

//* I made the buttons to feed the animals and skip the time, and the time counter, into commponents instead of writing the code
//* for them  in here because it's easier to add more functionality and make edits without having the App.js file feel too cluttered.

function App() {
	return (
		<div className="App">
			<Time />
			<Animal />
			<div className="buttons">
				<FeedAnimals />
				<SkipTime />
			</div>
		</div>
	);
}

export default App;
