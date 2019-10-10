import React from 'react';

import smartfit from "../smartfit.svg";
import plus from "../plus.svg";
import bioritmo from "../bioritmo.svg";

import './index.scss';

export default props => (
  <div className="card-plan">
  <div className="card-plan__title">{props.title}</div>
  <div className="logos">
    <img alt="Fit" src={smartfit} />
    <img alt="Plus" src={plus} />
    <img alt="Bioritmo" src={bioritmo} />
  </div>
  <hr />
  <div className="card-plan__sub-title">{props.description}</div>
  <p className="card-plan__cities">
    <strong>Bioritmo:</strong>Belém, Limeira, Piracicaba, Shopping
    Metropolitano, Centro, Chácara Santo Antônio, Continental,
    Santana, Santo André, São Caetano, Tamboré e West Plaza.
  </p>
  <div className="card-plan__price">R$ {props.price} / mês</div>
</div>
)