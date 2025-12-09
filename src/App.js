import { Component } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import players from "./utils/players";
import SearchBox from "./components/search-box/search-box.component";
import PlayerList from "./components/player-list/player-list.component.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: players,
      searchField: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const newPlayers = players.filter((player) => {
      return player.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    const { onChangeHandler } = this;

    return (
      <div className="App">
        <Header />
        <SearchBox
          placeholder="search for your favourite player.."
          onChangeHandler={onChangeHandler}
        />
        <PlayerList players={newPlayers} />
      </div>
    );
  }
}

export default App;
