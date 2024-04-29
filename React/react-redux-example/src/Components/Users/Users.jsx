import React from "react";
import { connect } from "react-redux";
import Table from "../table/table";
const UserList = ({ users }) => {
  console.log(users);
  return (
    <div>
      <Table tableData={users} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.userState.users,
  };
};
export default connect(mapStateToProps)(UserList);
