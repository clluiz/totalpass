import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPicture } from './picture.actions';

import './index.scss';

class UploadPicture extends Component {
  updatePicture = files => {
    this.props.setPicture(window.URL.createObjectURL(files[0]));
  };

  render() {
    return (
      <div className="upload-picture">
        {this.props.picture.src ? (
          <img
            src={this.props.picture.src}
            className="picture"
            alt="Your face here"
          />
        ) : (
          <FontAwesomeIcon icon={faUser} />
        )}
        <label className="file-container">
          <input
            type="file"
            accept="image/*"
            onChange={e => this.updatePicture(e.target.files)}
          />
          <span>Enviar foto</span>
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => ({ picture: state.picture });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setPicture }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPicture);
