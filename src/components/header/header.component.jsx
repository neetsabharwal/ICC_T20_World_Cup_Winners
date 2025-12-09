import { Component } from "react";
import "./header.styles.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src="https://images.icc-cricket.com/image/upload/t_ratio16_9-size20-webp/prd/yqm0s8y8mfy2ei0cogp3" />
        <h1>ICC Men's T20 World Cup Winners</h1>
      </div>
    );
  }
}

export default Header;
