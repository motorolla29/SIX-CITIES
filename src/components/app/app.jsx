import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { AppRoute, AuthorizationStatus } from "../../const.js";
import { getAuthorizationStatus } from "../../store/user/selectors.js";
import withPrivateRoute from "../../hoc/with-private-route.jsx";
import MainPage from "../pages/main-page/main-page";
import LoginPage from "../pages/login-page/login-page.jsx";
import FavoritesPage from "../pages/favorites-page/favorites-page.jsx";
import NotFoundPage from "../pages/not-found-page/not-found-page.jsx";
import OfferPage from "../pages/offer-page/offer-page.jsx";
import LoadWrapper from "../load-wrapper/load-wrapper.jsx";
import ServerErrorPage from "../pages/server-error-page/server-error-page.jsx";

function App() {
  const authStatus = useSelector(getAuthorizationStatus);
  const isAuthKnown = authStatus !== AuthorizationStatus.UNKNOWN;

  const LoginPagePrivate = withPrivateRoute(
    LoginPage,
    authStatus === AuthorizationStatus.NO_AUTH
  );

  const FavoritesPagePrivate = withPrivateRoute(
    FavoritesPage,
    authStatus === AuthorizationStatus.AUTH,
    AppRoute.LOGIN
  );

  return (
    <Switch>
      <Route path={AppRoute.ROOT} exact>
        <MainPage />
      </Route>

      <Route path={AppRoute.LOGIN} exact>
        <LoadWrapper isLoad={isAuthKnown}>
          <LoginPagePrivate />
        </LoadWrapper>
      </Route>

      <Route path={AppRoute.FAVORITES} exact>
        <LoadWrapper isLoad={isAuthKnown}>
          <FavoritesPagePrivate />
        </LoadWrapper>
      </Route>

      <Route
        exact
        path={`${AppRoute.OFFER}/:id`}
        render={({ match }) => <OfferPage adId={match.params.id} />}
      />

      <Route path={AppRoute.SERVER_ERROR} exact>
        <ServerErrorPage />
      </Route>

      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
