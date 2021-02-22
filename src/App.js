import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <main>
        <Title />
      </main>
      <Title content="Andrea's simple title" />
      <Pokemon
        name="Charizard"
        weight="90 kg"
        awesome={true}
        terrifying={false}
        abilities={["Blaze", "Solar power", "Tough claws", "Drought"]}
      />

      <Pokemon
        name="Bulbasour"
        weight="6.9 kg"
        awesome={true}
        terrifying={false}
        abilities={["Overgrow", "Chlorophyll"]}
      />

      <Pokemon
        name="Mewtwo"
        weight="122 kg"
        awesome={true}
        terrifying={true}
        abilities={["Pressure", "Unnerve", "Steadfast", "Insomnia"]}
      />
      <Pokemon
        name="Mega beedrill"
        weight="65 kg"
        awesome={false}
        terrifying={true}
        abilities={["Intimidate", "Unnerve"]}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
