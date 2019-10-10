import React from 'react';

import './index.scss';

export default (props) => (
  <button className="button-advance" type="submit" onClick={props.onClick}>
    Avançar
  </button>
)