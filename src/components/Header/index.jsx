import React, { Component } from 'react';
import './index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { app } = this.props;
    return (<header className="header">
      <button className="nav-button" onClick={this.props.back} style={{ visibility : app.step > 0 && app.step < 3 ? 'visible' : 'hidden' }}>
        <FontAwesomeIcon icon={faArrowLeft}/>
      </button>
      <div>
        <div className="header__title">Cadastro</div>
        <div className="header__description">{app.steps[app.step].description}</div>
      </div>
      <button className="nav-button" onClick={this.props.next} style={{ visibility : app.step < 3 ? 'visible' : 'hidden' }}>
        <FontAwesomeIcon icon={faArrowRight}/>
      </button>
    </header>
    )
  }
}

const mapStateToProps = state => ({ app: state.app });

export default connect(mapStateToProps)(Header);