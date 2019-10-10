import React, { Component } from "react";
import ButtonAdvance from "../ButtonAdvance";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import Card from './Card';
import { goToPlan } from './plan.actions';

import "../../styles/form.scss";
import "./index.scss";

class Plan extends Component {

  previousPlan = (event) => {
    event.preventDefault();
    const { plan } = this.props;
    let previousPlan = plan.selectedPlan - 1;
    if(previousPlan < 0) previousPlan = plan.plans.length - 1;
    this.props.goToPlan(previousPlan);
  }

  nextPlan = (event) => {
    event.preventDefault();
    const { plan } = this.props;
    let nextPlan = plan.selectedPlan + 1;
    if(nextPlan > (plan.plans.length - 1)) nextPlan = 0;
    this.props.goToPlan(nextPlan);
  }

  getPlan = () => {
    const { plan } = this.props;
    return <Card {...plan.plans[plan.selectedPlan]} />;
  };
 
  render() {
    return (
      <div className="form-container">
        <form className="form plan">
          <div>Escolha seu plano</div>
          <div className="caroussel">
            <button className="nav-button" onClick={(event) => this.previousPlan(event)}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {this.getPlan()}
            <button className="nav-button">
              <FontAwesomeIcon icon={faChevronRight} onClick={(event) => this.nextPlan(event)}/>
            </button>
          </div>
          <ButtonAdvance onClick={this.props.next} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ plan: state.plan });
const mapDispatchToProps = dispatch => bindActionCreators({ goToPlan }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Plan);
