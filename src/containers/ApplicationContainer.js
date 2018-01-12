import React, { Component } from 'react';
import ApplicationView from '../views/ApplicationView';
import ApplicationLoadingView from '../views/ApplicationLoadingView';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initializeApplication } from '../state/actions/applicationActions';

class ApplicationContainer extends Component {

  componentWillMount = () => {
    this.props.actions.initializeApplication();
  }

  render() {
    if (!this.props.applicationIsReady) return <ApplicationLoadingView />;
    return <ApplicationView />;
  }
}

const mapStateToProps = (state) => {
  return {
    applicationIsReady: (state.status.initializeStatus === 'fulfilled')
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { initializeApplication },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer);
