import React, { Component } from "react";
import ButtonAdvance from "../ButtonAdvance";

import "../../styles/form.scss";

class Confirmation extends Component {
  render() {
    return (
      <div className="form-container">
        <ButtonAdvance onClick={this.props.next} />
      </div>
    );
  }
}

export default Confirmation;