import { Component } from "react";
import Player from "../player/player.component";
import "./player-list.styles.css";

class PlayerList extends Component {
  render() {
    const players = this.props.players;
    return (
      <div className="player-list-container">
        {players.length === 0 && (
          <h4>Oops, your favourite player is yet to win a T20 World Cup!</h4>
        )}
        {players.map((player) => {
          return <Player player={player} />;
        })}
      </div>
    );
  }
}

export default PlayerList;
