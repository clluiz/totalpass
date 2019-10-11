import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import PersonalData from './components/PersonalData';
import Address from './components/Address';
import Plan from './components/Plan';
import Confirmation from './components/Confirmation';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import { bindActionCreators } from 'redux';
import { setStep } from './app.actions';

class App extends Component {
  next = () => {
    const { app } = this.props;
    this.props.setStep(app.step + 1);
  };

  back = () => {
    const { app } = this.props;
    this.props.setStep(app.step - 1);
  };

  getStep = () => {
    const { app } = this.props;
    switch (app.step) {
      case 0:
        return <PersonalData next={this.next} />;
      case 1:
        return <Address back={this.back} next={this.next} />;
      case 2:
        return <Plan next={this.next} back={this.back} />;
      case 3:
        return <Confirmation />;
      default:
        return <PersonalData next={this.next} />;
    }
  };

  render() {
    return (
      <Container fluid>
        {this.getStep()}
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = state => ({ app: state.app });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setStep }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
