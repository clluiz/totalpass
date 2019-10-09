import React from "react";
import { connect } from 'react-redux';

import './index.scss';

const Breadcrumb = (props) => {
  const { app } = props;
  return(
    <div className="indicator">
      <span className={app.step === 0 ? 'ball ball--selected' : 'ball'}></span>
      <span className={app.step === 1 ? 'ball ball--selected' : 'ball'}></span>
      <span className={app.step >= 2 ? 'ball ball--selected' : 'ball'}></span>
    </div>
  )
}

const mapStateToProps = state => ({ app : state.app });

export default connect(mapStateToProps)(Breadcrumb);