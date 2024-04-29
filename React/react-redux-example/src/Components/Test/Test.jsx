import React from "react";
import { connect } from "react-redux";
const Test = (props) => {
  return (
    <div>
      <h1>{props.count}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count,
});
export default connect(mapStateToProps)(Test);
