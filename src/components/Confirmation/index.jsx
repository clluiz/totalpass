import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header';

import '../../styles/form.scss';
import './index.scss';

class Confirmation extends Component {
  render() {
    return (
      <Fragment>
        <Header description="Dados pessoais" next={this.props.nenxt} />
        <div className="form-container confirmation">
          <FontAwesomeIcon icon={faCheck} />
          <div className="confirmation__title">Cadastro concluído</div>
          <p className="confirmation__text">
            Acesse sua conta e comece a se exercitar agora mesmo!
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Confirmation;
