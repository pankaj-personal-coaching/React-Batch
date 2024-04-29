import React, { Component } from "react";
export const HigherOrderComponent = (WrappedComponent) => {
  class InnerComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 5000);
    }

    render() {
      return <WrappedComponent {...this.props} loading={this.state.loading} />;
    }
  }
  return InnerComponent;
};
