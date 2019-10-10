import React, { Component } from "react";
import ButtonAdvance from "../ButtonAdvance";
import { connect } from 'react-redux';

import "../../styles/form.scss";
import "./index.scss";

import smartfit from './smartfit.svg';
import plus from './plus.svg';
import bioritmo from './bioritmo.svg';

class Plan extends Component {
  render() {
    return (
      <div className="form-container">
        <form className="form plan">
          <div>Escolha seu plano</div>
          <div className="card-plan">
            <div className="card-plan__title">Mega</div>
            <div className="logos">
              <img alt="Fit" src={smartfit} />
              <img alt="Plus" src={plus} />
              <img alt="Bioritmo" src={bioritmo} />
            </div>
            <hr />
            <div className="card-plan__sub-title">Plano Fit +</div>
            <p className="card-plan__cities"><strong>Bioritmo:</strong>Belém, Limeira, Piracicaba, Shopping Metropolitano, Centro, Chácara Santo Antônio, Continental, Santana, Santo André, São Caetano, Tamboré e West Plaza.</p>
            <div className="card-plan__price">R$ 100 / mês</div>
          </div>
          <ButtonAdvance onClick={this.props.next} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ app : state.app, plan : state.plan });

export default connect(mapStateToProps)(Plan);