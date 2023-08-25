import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { string, bool, func } from "prop-types";

import { AppRoute, AuthorizationStatus, UserRole } from "../../const";
import LoadWrapper from "../load-wrapper/load-wrapper";

function PrivateRoute({
  render,
  authorizationStatus,
  role = UserRole.VISITOR,
}) {
  const isAuthKnown = authorizationStatus !== AuthorizationStatus.UNKNOWN;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  const isNotAuthorized = authorizationStatus === AuthorizationStatus.NO_AUTH;

  switch (role) {
    case UserRole.USER:
      return (
        <LoadWrapper isLoad={isAuthKnown}>
          {isAuthorized ? render() : <Navigate to={AppRoute.LOGIN} />}
        </LoadWrapper>
      );

    default:
      return (
        <LoadWrapper isLoad={isAuthKnown}>
          {isNotAuthorized ? render() : <Navigate to={AppRoute.ROOT} />}
        </LoadWrapper>
      );
  }
}

PrivateRoute.propTypes = {
  authorizationStatus: string.isRequired,
  exact: bool.isRequired,
  path: string.isRequired,
  render: func.isRequired,
  role: string.isRequired,
};

const mapStateToProps = ({ authorizationStatus }) => ({ authorizationStatus });

export { PrivateRoute };
export default connect(mapStateToProps)(PrivateRoute);
