import React, { Component } from 'react';
import ButtonAdvance from '../ButtonAdvance';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import { goToPlan, getGif } from './plan.actions';

import '../../styles/form.scss';
import './index.scss';

class Plan extends Component {
  componentDidMount() {
    this.getGif();
  }

  previousPlan = event => {
    const { plan } = this.props;
    let previousPlan = plan.selectedPlan - 1;
    if (previousPlan < 0) previousPlan = plan.plans.length - 1;
    this.setPlan(previousPlan);
  };

  nextPlan = event => {
    const { plan } = this.props;
    let nextPlan = plan.selectedPlan + 1;
    if (nextPlan > plan.plans.length - 1) nextPlan = 0;
    this.setPlan(nextPlan);
  };

  setPlan = index => {
    this.props.goToPlan(index);
    this.getGif();
  };

  getGif = () => {
    this.props.getGif();
  };

  getPlan = () => {
    const { plan } = this.props;
    const selectedPlan = plan.plans[plan.selectedPlan];
    return <Card {...selectedPlan} />;
  };

  render() {
    return (
      <div className="form-container">
        <div className="form plan">
          <div>Escolha seu plano</div>
          <div className="caroussel">
            <button
              className="nav-button"
              onClick={this.previousPlan}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {this.getPlan()}
            <button className="nav-button">
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={this.nextPlan}
              />
            </button>
          </div>
          <ButtonAdvance onClick={this.props.next} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ plan: state.plan });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ goToPlan, getGif }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plan);
