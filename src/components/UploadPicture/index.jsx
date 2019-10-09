import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './index.scss';

export default class UploadPicture extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      picture : null
    };
  }

  updatePicture = (files) => {
    this.setState({
      picture : window.URL.createObjectURL(files[0])
    });
  };

  render() {
    return (
      <div className="upload-picture">
        { this.state.picture ? <img src={this.state.picture} className="picture" alt="Your face here" /> : <FontAwesomeIcon icon={faUser} /> }
        <label className="file-container">
          <input type="file" accept="image/*" onChange={(e) => this.updatePicture(e.target.files)} />
          <span>Enviar foto</span>
        </label>
      </div>
    )
  }
}