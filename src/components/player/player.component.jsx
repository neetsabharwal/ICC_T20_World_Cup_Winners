import { Component } from "react";
import "./player.styles.css";

class Player extends Component {
  render() {
    const player = this.props.player;
    return (
      <div className="player-container" key={player.name}>
        <img src={player.image} />
        <h2>{player.name}</h2>
        <h3>{player.team}</h3>
        <p>T20 WC Winning Year: {player.t20_wc_win_year}</p>
        <p>Role: {player.role}</p>
      </div>
    );
  }
}

export default Player;
