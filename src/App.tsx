import './App.css';
//import { fMajor as scale} from './scales/scales';
//import { gMajor as scale} from './scales/scales';
import { getRandomScale } from './scales/scales';

function App() {
  const scale = getRandomScale();
  return (
    <div className="App">
      <header className="App-header">
        <p>{scale.name}</p>
        <img src={scale.image} className="scale" alt={scale.description} />
      </header>
    </div>
  );
}

export default App;
