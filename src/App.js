import './index.css';
import pablo from './images/pablo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">Myer's Superfoods</header>
      <div className="intro-container">
        <p>
          Hello! I'm Pablo Myers, owner of Myer's Super Foods. Be careful, when you eat my new
          combo-can. There are bones and shells throughout. You might get diseased. You might choke
          on a bone. But you'll definitely smile from the flavor. I am Pablo Myers.
        </p>
        <img className="pablo" src={pablo} alt="Pablo Meyers" />
      </div>
    </div>
  );
}

export default App;
