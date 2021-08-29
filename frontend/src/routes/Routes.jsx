import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Service from "../pages/Service";
import DetailService from "../pages/DetailService";
import MemberShip from "../pages/MemberShip";
import DetailMembership from "../pages/DetailMembership";
import Booking from "../pages/Booking";
import PageNotFound from "../pages/PageNotFound";
import Success from "../pages/Success";
import CancelBooking from "../pages/CancelBooking";
import ViewBooking from "../pages/ViewBooking";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/service/:slug" component={DetailService} />
      <Route path="/service" component={Service} />
      <Route path="/membership/:slug" component={DetailMembership} />
      <Route path="/membership" component={MemberShip} />
      <Route path="/booking" component={Booking} />
      <Route path="/success" component={Success} />
      <Route path="/cancelBooking" component={CancelBooking} />
      <Route path="/viewBooking" component={ViewBooking} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
